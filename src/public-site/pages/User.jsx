import { useState } from "react";

const initialInvoices = [
  { id: 1, invoice: "1001", company: "Tech Jungle", dueDate: "14 Sep 2022", status: "Unpaid", amount: 973.48 },
  { id: 2, invoice: "1002", company: "Tech Jungle", dueDate: "14 Sep 2022", status: "Paid", amount: 480.21 },
  { id: 3, invoice: "1003", company: "Tech Jungle", dueDate: "14 Sep 2022", status: "Unpaid", amount: 1254.37 },
  { id: 4, invoice: "1004", company: "Tech Jungle", dueDate: "14 Sep 2022", status: "Paid", amount: 973.48 },
  { id: 5, invoice: "1005", company: "Tech Jungle", dueDate: "14 Sep 2022", status: "Unpaid", amount: 7094.45 },
  { id: 6, invoice: "1006", company: "Tech Jungle", dueDate: "14 Sep 2022", status: "Paid", amount: 4599.75 },
  { id: 7, invoice: "1007", company: "Tech Jungle", dueDate: "14 Sep 2022", status: "Paid", amount: 804.56 },
  { id: 8, invoice: "1008", company: "Tech Jungle", dueDate: "14 Sep 2022", status: "Unpaid", amount: 1200.00 },
];

const TABS = [
  { label: "All", key: "All" },
  { label: "Unpaid", key: "Unpaid" },
  { label: "Paid", key: "Paid" },
  { label: "Archived", key: "Archived" },
];

const SORT_FIELDS = ["invoice", "company", "dueDate", "status", "amount"];

// ── Icons (inline SVG) ────────────────────────────────────────────────────────

const CheckCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" />
  </svg>
);
const XCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" />
  </svg>
);
const PrinterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" /><rect x="6" y="14" width="12" height="8" />
  </svg>
);
const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" />
  </svg>
);
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const EyeIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12S5 5 12 5s11 7 11 7-4 7-11 7S1 12 1 12z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const DeleteRowIcon = ({ disabled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={disabled ? "#d1d5db" : "#9ca3af"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" />
  </svg>
);
const SortIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline ml-1 opacity-50">
    <path d="M7 3l5 5 5-5M7 21l5-5 5 5" />
  </svg>
);
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// ── Status Badge ──────────────────────────────────────────────────────────────

const StatusBadge = ({ status }) => {
  const styles = {
    Unpaid: "bg-red-50 text-red-500 border border-red-200",
    Paid: "bg-gray-100 text-gray-500 border border-gray-200",
    Archived: "bg-blue-50 text-blue-400 border border-blue-200",
  };
  return (
    <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-medium ${styles[status] || "bg-gray-100 text-gray-500"}`}>
      {status}
    </span>
  );
};

// ── Add Invoice Modal ─────────────────────────────────────────────────────────

const AddModal = ({ onClose, onAdd }) => {
  const [form, setForm] = useState({ invoice: "", company: "", dueDate: "", status: "Unpaid", amount: "" });
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = () => {
    if (!form.invoice || !form.company || !form.dueDate || !form.amount) return;
    onAdd({ ...form, amount: parseFloat(form.amount) });
    onClose();
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-fade-in">
        <h2 className="text-lg font-bold text-gray-800 mb-5">New Invoice</h2>
        <div className="space-y-3">
          {[
            { label: "Invoice #", name: "invoice", type: "text", placeholder: "e.g. 1011" },
            { label: "Company", name: "company", type: "text", placeholder: "e.g. Acme Corp" },
            { label: "Due Date", name: "dueDate", type: "text", placeholder: "e.g. 20 Jan 2023" },
            { label: "Amount ($)", name: "amount", type: "number", placeholder: "e.g. 500.00" },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label className="block text-xs font-semibold text-gray-500 mb-1">{label}</label>
              <input name={name} type={type} placeholder={placeholder} value={form[name]} onChange={handle}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
          ))}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">Status</label>
            <select name="status" value={form.status} onChange={handle}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Unpaid</option><option>Paid</option><option>Archived</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button onClick={onClose} className="flex-1 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition">Cancel</button>
          <button onClick={submit} className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition">Add Invoice</button>
        </div>
      </div>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────

export default function User() {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [activeTab, setActiveTab] = useState("All");
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortDir, setSortDir] = useState("asc");
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg, color = "green") => {
    setToast({ msg, color });
    setTimeout(() => setToast(null), 2500);
  };

  // Counts per tab
  const counts = TABS.reduce((acc, t) => {
    acc[t.key] = t.key === "All" ? invoices.length : invoices.filter(i => i.status === t.key).length;
    return acc;
  }, {});

  // Filter + search + sort
  const filtered = invoices
    .filter(i => activeTab === "All" || i.status === activeTab)
    .filter(i =>
      !search ||
      i.invoice.toLowerCase().includes(search.toLowerCase()) ||
      i.company.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortField) return 0;
      const va = sortField === "amount" ? a.amount : a[sortField];
      const vb = sortField === "amount" ? b.amount : b[sortField];
      return sortDir === "asc" ? (va > vb ? 1 : -1) : (va < vb ? 1 : -1);
    });

  const toggleSort = (field) => {
    if (sortField === field) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortField(field); setSortDir("asc"); }
  };

  const toggleAll = () => {
    if (selected.length === filtered.length) setSelected([]);
    else setSelected(filtered.map(i => i.id));
  };
  const toggleOne = (id) =>
    setSelected(sel => sel.includes(id) ? sel.filter(s => s !== id) : [...sel, id]);

  const markAs = (status) => {
    if (!selected.length) return showToast("Select at least one invoice.", "red");
    setInvoices(prev => prev.map(i => selected.includes(i.id) ? { ...i, status } : i));
    showToast(`Marked ${selected.length} invoice(s) as ${status}.`);
    setSelected([]);
  };

  const deleteSelected = () => {
    if (!selected.length) return showToast("Select at least one invoice.", "red");
    setInvoices(prev => prev.filter(i => !selected.includes(i.id)));
    showToast(`Deleted ${selected.length} invoice(s).`, "red");
    setSelected([]);
  };

  const deleteOne = (id) => {
    setInvoices(prev => prev.filter(i => i.id !== id));
    setSelected(sel => sel.filter(s => s !== id));
    showToast("Invoice deleted.", "red");
  };

  const addInvoice = (data) => {
    const newId = Math.max(...invoices.map(i => i.id)) + 1;
    setInvoices(prev => [...prev, { ...data, id: newId }]);
    showToast("Invoice added successfully!");
  };

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex items-start justify-center p-4 sm:p-6 lg:p-8 font-sans">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-xl shadow-lg text-white text-sm font-medium transition-all
          ${toast.color === "red" ? "bg-red-500" : "bg-emerald-500"}`}>
          {toast.msg}
        </div>
      )}

      {/* Modal */}
      {showModal && <AddModal onClose={() => setShowModal(false)} onAdd={addInvoice} />}

      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-sm overflow-hidden">

        {/* ── Tabs ── */}
        <div className="border-b border-gray-100 px-4 sm:px-6 overflow-x-auto">
          <div className="flex gap-1 min-w-max">
            {TABS.map(tab => (
              <button key={tab.key} onClick={() => { setActiveTab(tab.key); setSelected([]); }}
                className={`relative flex items-center gap-1.5 px-4 py-4 text-sm font-medium transition-colors whitespace-nowrap
                  ${activeTab === tab.key
                    ? "text-blue-600 border-b-2 border-blue-600 -mb-px"
                    : "text-gray-400 hover:text-gray-600"}`}>
                {tab.label}
                <span className={`text-xs font-bold px-1.5 py-0.5 rounded-md
                  ${activeTab === tab.key ? "text-blue-600 bg-blue-50" : "text-gray-400 bg-gray-100"}`}>
                  {counts[tab.key]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Toolbar ── */}
        <div className="px-4 sm:px-6 py-4 flex flex-wrap items-center gap-2">
          {/* Action buttons */}
          <div className="flex flex-wrap gap-2 flex-1">
            <button onClick={() => markAs("Paid")}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-gray-200 text-xs font-medium text-gray-600 hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors">
              <span className="text-emerald-500"><CheckCircleIcon /></span> Mark as paid
            </button>
            <button onClick={() => markAs("Unpaid")}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-gray-200 text-xs font-medium text-gray-600 hover:border-red-400 hover:text-red-500 hover:bg-red-50 transition-colors">
              <span className="text-red-500"><XCircleIcon /></span> Mark as unpaid
            </button>
            <button onClick={() => showToast("Sent to printer!")}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-gray-200 text-xs font-medium text-gray-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              <PrinterIcon /> Print
            </button>
            <button onClick={deleteSelected}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-gray-200 text-xs font-medium text-gray-600 hover:border-red-400 hover:text-red-500 hover:bg-red-50 transition-colors">
              <TrashIcon /> Delete
            </button>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-56">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><SearchIcon /></span>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search invoice"
              className="w-full pl-9 pr-3 py-2 rounded-full border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50" />
          </div>

          {/* Add button */}
          <button onClick={() => setShowModal(true)}
            className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow transition-colors">
            <PlusIcon /> Add
          </button>
        </div>

        {/* ── Table (Desktop) ── */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-50/60 border-y border-gray-100">
                <th className="pl-6 pr-3 py-3 w-10">
                  <input type="checkbox" checked={filtered.length > 0 && selected.length === filtered.length}
                    onChange={toggleAll}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 accent-blue-600 cursor-pointer" />
                </th>
                {["invoice", "company", "dueDate", "status", "amount"].map(field => (
                  <th key={field} onClick={() => toggleSort(field)}
                    className="px-4 py-3 text-left font-semibold text-gray-600 cursor-pointer select-none hover:text-blue-600 transition-colors whitespace-nowrap">
                    {field === "dueDate" ? "Due Date" : field.charAt(0).toUpperCase() + field.slice(1)}
                    <SortIcon />
                  </th>
                ))}
                <th className="px-4 py-3 text-left font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan="7" className="text-center py-16 text-gray-400 text-sm">No invoices found.</td></tr>
              ) : filtered.map((inv, idx) => (
                <tr key={inv.id}
                  className={`border-b border-gray-50 transition-colors
                    ${selected.includes(inv.id) ? "bg-blue-50/40" : idx % 2 === 0 ? "bg-white hover:bg-gray-50/60" : "bg-gray-50/30 hover:bg-gray-50/60"}`}>
                  <td className="pl-6 pr-3 py-3.5">
                    <input type="checkbox" checked={selected.includes(inv.id)} onChange={() => toggleOne(inv.id)}
                      className="w-4 h-4 rounded border-gray-300 accent-blue-600 cursor-pointer" />
                  </td>
                  <td className="px-4 py-3.5 text-gray-500">{inv.invoice}</td>
                  <td className="px-4 py-3.5 font-bold text-gray-800">{inv.company}</td>
                  <td className="px-4 py-3.5 text-gray-500">{inv.dueDate}</td>
                  <td className="px-4 py-3.5"><StatusBadge status={inv.status} /></td>
                  <td className="px-4 py-3.5 font-semibold text-gray-800">${inv.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <button title="View" className="hover:scale-110 transition-transform"><EyeIcon /></button>
                      <button title="Edit" className="hover:scale-110 transition-transform"><EditIcon /></button>
                      <button title="Delete" onClick={() => deleteOne(inv.id)} className="hover:scale-110 transition-transform">
                        <DeleteRowIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Card List (Mobile/Tablet) ── */}
        <div className="md:hidden divide-y divide-gray-100">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400 text-sm">No invoices found.</div>
          ) : filtered.map(inv => (
            <div key={inv.id}
              className={`px-4 py-4 flex items-start gap-3 transition-colors
                ${selected.includes(inv.id) ? "bg-blue-50/40" : "hover:bg-gray-50/60"}`}>
              <input type="checkbox" checked={selected.includes(inv.id)} onChange={() => toggleOne(inv.id)}
                className="mt-1 w-4 h-4 rounded border-gray-300 accent-blue-600 cursor-pointer flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="font-bold text-gray-800">{inv.company}</span>
                  <StatusBadge status={inv.status} />
                </div>
                <div className="text-xs text-gray-400 mt-0.5">Invoice #{inv.invoice} · {inv.dueDate}</div>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="font-semibold text-gray-700 text-sm">
                    ${inv.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                  <div className="flex items-center gap-3">
                    <button title="View"><EyeIcon /></button>
                    <button title="Edit"><EditIcon /></button>
                    <button title="Delete" onClick={() => deleteOne(inv.id)}><DeleteRowIcon /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer ── */}
        <div className="px-4 sm:px-6 py-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 flex-wrap gap-2">
          <span>{filtered.length} invoice{filtered.length !== 1 ? "s" : ""} shown</span>
          {selected.length > 0 && (
            <span className="text-blue-600 font-semibold">{selected.length} selected</span>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.2s ease; }
      `}</style>
    </div>
  );
}