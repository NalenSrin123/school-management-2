import React, { useState } from "react";

const faqs = [
  {
    question: "What is this website about?",
    answer: "This website provides useful information and resources.",
  },
  {
    question: "How can I contact support?",
    answer: "You can contact us via email or contact form.",
  },
  {
    question: "Is this service free?",
    answer: "Yes, basic features are free.",
  },
  {
    question: "Can I create an account?",
    answer: "Yes, you can sign up easily.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#f0f2f5",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h1
          style={{ textAlign: "center", marginBottom: "40px", color: "#333" }}
        >
        </h1>
        {faqs.map((faq, index) => (
          <article
            key={index}
            onClick={() => toggleFAQ(index)}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "15px",
              boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3 style={{ margin: 0, color: "#111" }}>{faq.question}</h3>
              <span
                style={{
                  fontSize: "24px",
                  transition: "transform 0.3s",
                  transform:
                    activeIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  color: "#007bff",
                }}
              >
                +
              </span>
            </div>

            <div
              style={{
                maxHeight: activeIndex === index ? "200px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.3s ease, padding 0.3s ease",
                paddingTop: activeIndex === index ? "10px" : "0px",
              }}
            >
              <p style={{ margin: 0, color: "#555", lineHeight: "1.6" }}>
                {faq.answer}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Faq;
