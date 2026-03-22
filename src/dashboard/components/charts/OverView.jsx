import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,PieChart, Pie, Cell } from 'recharts';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

// --- DATA ---
const cashData = [
  { name: 'JAN', value: 2000 }, { name: 'FEB', value: 2400 },
  { name: 'MAR', value: 1800 }, { name: 'APR', value: 4200 },
  { name: 'MAY', value: 4800 }, { name: 'JUN', value: 10897 },
  { name: 'JUL', value: 6000 }, { name: 'AUG', value: 6500 },
  { name: 'SEP', value: 9200 }, { name: 'OCT', value: 9500 },
  { name: 'NOV', value: 10500 }, { name: 'DEC', value: 11000 },
  { name: 'JA', value: 12000 },
];

const expenseData = [
  { name: 'Rental Cost', value: 30, amount: '$26,000', color: '#8b5cf6' },
  { name: 'Wages', value: 22, amount: '$16,500', color: '#84cc16' },
  { name: 'Medical Equipment', value: 20, amount: '$15,640', color: '#0ea5e9' },
  { name: 'Supplies', value: 18, amount: '$13,564', color: '#ec4899' },
  { name: 'Promotion Costs', value: 8, amount: '$8,240', color: '#f97316' },
  { name: 'Other', value: 2, amount: '$2,128', color: '#eab308' },
];

// --- TOOLTIP COMPONENT ---
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1e293b] text-white p-3 rounded-xl shadow-xl border-none outline-none">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total:</p>
        <p className="text-lg font-bold">${payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

function OverView() {
  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-slate-800">Good morning, John!</h1>
          <p className="text-slate-500 font-medium">Wednesday, December 6, 2022</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- Chart CARD --- */}
          <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h2 className="text-xl font-bold mb-6">Cashflow</h2>
                <p className="text-[10px] font-extrabold text-slate-400 tracking-widest mb-1 uppercase">Total Cash</p>
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-black tracking-tight text-slate-900">$130,232</span>
                  <span className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full text-xs font-bold border border-emerald-100">
                    <ArrowUpRight size={14} strokeWidth={3} /> 4.51%
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button className="flex items-center gap-2 text-gray-500 text-sm border border-slate-200 px-4 py-2 rounded-xl hover:bg-slate-50 transition-all font-medium">
                  Last 12 month <ChevronDown size={16} />
                </button>
                <p className="text-slate-400 text-xs font-medium">January 2022 - December 2022</p>
              </div>
            </div>

            <div className="h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={cashData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorCash" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 600}} 
                    dy={15} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 600}} 
                    tickFormatter={(v) => v === 0 ? '0' : `${v/1000}K`} 
                  />
                  <Tooltip 
                    content={<CustomTooltip />} 
                    cursor={{ stroke: '#4f46e5', strokeWidth: 1, strokeDasharray: '4 4' }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#4f46e5" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#colorCash)" 
                    activeDot={{ r: 6, fill: '#4f46e5', stroke: '#fff', strokeWidth: 3 }} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* --- EXPENSES CARD --- */}
          <div className="lg:col-span-1 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-slate-800">Expenses</h2>
              <button className="flex items-center gap-1 text-xs font-bold text-slate-500 border border-slate-200 px-3 py-2 rounded-xl">
                Last 6 months <ChevronDown size={14} />
              </button>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <div className="w-1/2 h-44 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie 
                      data={expenseData} 
                      innerRadius={60} 
                      outerRadius={80} 
                      paddingAngle={5} 
                      dataKey="value" 
                      stroke="none"
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} cornerRadius={10} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-tighter">Total Expense</span>
                  <span className="text-2xl font-black text-slate-800">$80,832</span>
                </div>
              </div>

              <div className="w-1/2 space-y-3">
                {expenseData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <div className="w-2.5 h-1 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                      <span className="text-[11px] font-bold text-slate-500 truncate group-hover:text-slate-900 transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-black text-slate-800 pl-2">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <h3 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em] mb-4">Top Expense</h3>
              <div className="grid grid-cols-2 gap-4">
                {expenseData.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2.5 h-1 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-[10px] font-extrabold text-slate-400 truncate uppercase tracking-tight">{item.name}</span>
                    </div>
                    <p className="text-sm font-black text-slate-800">{item.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OverView;