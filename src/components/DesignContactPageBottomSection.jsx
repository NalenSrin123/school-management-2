import { useState } from "react";

const DesingContactPageBottomSection=()=>{
  const faqs = [
    {
      question: "How long does the onboarding process take?",
      answer:
        "Most schools are fully operational on EduManage within 2 to 4 weeks, depending on the volume of data migration required.",
    },
    {
      question: "Do you offer discounts for non-profit schools?",
      answer:
        "Yes, we offer special pricing and discounts for non-profit schools.",
    },
    {
      question: "Can we integrate with our existing accounting software?",
      answer:
        "Yes, our platform supports integrations with many accounting systems.",
    },
    {
      question: "Is my school's data secure?",
      answer:
        "Yes. We use modern encryption and security standards to keep your data protected.",
    },
  ];

  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-800">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-slate-500 mt-3 mb-10">
          Can't find what you're looking for? Here are some quick answers.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl shadow-sm transition hover:shadow-md"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-800"
              >
                {faq.question}
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-5 text-slate-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default DesingContactPageBottomSection;