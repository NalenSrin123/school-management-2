// import { useState } from "react";
// import { LuSend } from "react-icons/lu";
// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",      // បន្ថែម name
//     email: "",     // បន្ថែម email
//     subject: "General Inquiry",
//     message: "",
//     rating: 5,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("https://school-management-2-5-main-cdrucp.laravel.cloud/api/feedbacks", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//         },
//         body: JSON.stringify({
//           // ផ្ញើគ្រប់ Data ទាំងអស់ដែល Server អាចនឹងត្រូវការ
//           name: formData.name, 
//           email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//           rating: Number(formData.rating),
//         }),
//       });

//       if (response.ok) {
//         alert("✅ ផ្ញើសារជោគជ័យ!");
//         setFormData({ ...formData, name: "", email: "", message: "" });
//       } else {
//         const errorData = await response.json();
//         console.error("Server Error Details:", errorData); // ឆែកមើលក្នុង Console ដើម្បីដឹងថា Server ខ្វះ Field អី
//         alert(`❌ Error ${response.status}: ${errorData.message || "Server មានបញ្ហា"}`);
//       }
//     } catch (error) {
//       console.error("Fetch Error:", error);
//       alert("⚠️ មិនអាចភ្ជាប់ទៅកាន់ Server បានទេ!");
//     }
//   };
//   return (
//     <>
//       <div className="bg-slate-100 ">
//         <section className="relative h-[300px] flex items-center justify-center text-white z-1">
//           <img
//             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
//             className="absolute inset-0 w-full h-full object-cover "
//           />
//           <div className="absolute inset-0  bg-slate-900/70"></div>

//           <div className="relative text-center">
//             <h1 className="text-5xl font-bold">Get in Touch</h1>
//             <p className="mt-3 text-slate-200 max-w-xl">
//               Have questions about our school management system? We're here to
//               help you digitize your institution.
//             </p>
//           </div>
//         </section>
//         <div className="max-w-7xl mx-auto px-6 -mt-20 pb-20 ">
//           <div className="grid lg:grid-cols-3 gap-8 ">
//             <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 z-10">
//               <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
//                 ✉ Send us a Message
//               </h2>

//               <div className="grid md:grid-cols-2 gap-4">
//                 <input
//                   className="border border-slate-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="John Doe"
//                 />
//                 <input
//                   className="border border-slate-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="john@school.edu"
//                 />
//               </div>

//               <select className="border border-slate-200 rounded-lg px-4 py-3 w-full mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option>General Inquiry</option>
//                 <option>Technical Support</option>
//                 <option>Admissions</option>
//               </select>

//               <textarea
//                 className="border border-slate-200 rounded-lg px-4 py-3 w-full mt-4 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="How can we help you?"
//               />

//               <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow flex items-center gap-2">
//                 <p>Send Message </p>
//                 <LuSend className="mt-1" />
//               </button>
//             </div>

//             <div className="space-y-6 z-10">
//               <div className="bg-white p-6 rounded-2xl shadow-md">
//                 <h3 className="font-semibold text-slate-800">
//                   Technical Support
//                 </h3>
//                 <p className="text-sm text-slate-500 mt-1">
//                   Available 24/7 for troubleshooting
//                 </p>
//                 <p className="text-blue-600 mt-3 font-medium">
//                   +1 (800) 123-4567
//                 </p>
//                 <p className="text-sm text-slate-500">support@edumanage.com</p>
//               </div>

//               <div className="bg-white p-6 rounded-2xl shadow-md">
//                 <h3 className="font-semibold text-slate-800">
//                   Admissions & Sales
//                 </h3>
//                 <p className="text-sm text-slate-500 mt-1">
//                   Talk to us about onboarding your school
//                 </p>
//                 <p className="text-blue-600 mt-3 font-medium">
//                   +1 (800) 987-6543
//                 </p>
//                 <p className="text-sm text-slate-500">sales@edumanage.com</p>
//               </div>

//               <div className="bg-white p-6 rounded-2xl shadow-md">
//                 <h3 className="font-semibold text-slate-800">
//                   General Inquiries
//                 </h3>
//                 <p className="text-sm text-slate-500 mt-1">
//                   Visit our headquarters
//                 </p>
//                 <p className="text-sm text-slate-600 mt-3">
//                   123 Innovation Drive
//                 </p>
//                 <p className="text-sm text-slate-600">
//                   San Francisco, CA 94103
//                 </p>
//               </div>

//               <iframe
//                 className="w-full h-40 rounded-2xl shadow-md"
//                 src="https://maps.google.com/maps?q=san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Contact;
// // import { useState } from "react";
// // import { LuSend } from "react-icons/lu";

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",      // បន្ថែម name
// //     email: "",     // បន្ថែម email
// //     subject: "General Inquiry",
// //     message: "",
// //     rating: 5,
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch("https://school-management-2-5-main-cdrucp.laravel.cloud/api/feedbacks", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           "Accept": "application/json",
// //         },
// //         body: JSON.stringify({
// //           // ផ្ញើគ្រប់ Data ទាំងអស់ដែល Server អាចនឹងត្រូវការ
// //           name: formData.name, 
// //           email: formData.email,
// //           subject: formData.subject,
// //           message: formData.message,
// //           rating: Number(formData.rating),
// //         }),
// //       });

// //       if (response.ok) {
// //         alert("✅ ផ្ញើសារជោគជ័យ!");
// //         setFormData({ ...formData, name: "", email: "", message: "" });
// //       } else {
// //         const errorData = await response.json();
// //         console.error("Server Error Details:", errorData); // ឆែកមើលក្នុង Console ដើម្បីដឹងថា Server ខ្វះ Field អី
// //         alert(`❌ Error ${response.status}: ${errorData.message || "Server មានបញ្ហា"}`);
// //       }
// //     } catch (error) {
// //       console.error("Fetch Error:", error);
// //       alert("⚠️ មិនអាចភ្ជាប់ទៅកាន់ Server បានទេ!");
// //     }
// //   };

// //   return (
// //     <>
// //       <div className="bg-slate-100 ">
// //         <section className="relative h-[300px] flex items-center justify-center text-white z-1">
// //           <img
// //             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
// //             className="absolute inset-0 w-full h-full object-cover "
// //             alt="background"
// //           />
// //           <div className="absolute inset-0 bg-slate-900/70"></div>
// //           <div className="relative text-center">
// //             <h1 className="text-5xl font-bold">Get in Touch</h1>
// //             <p className="mt-3 text-slate-200 max-w-xl">Have questions? We're here to help.</p>
// //           </div>
// //         </section>

// //         <div className="max-w-7xl mx-auto px-6 -mt-20 pb-20 ">
// //           <div className="grid lg:grid-cols-3 gap-8 ">
// //             <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 z-10">
// //               <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">✉ Send us a Message</h2>

// //               <form onSubmit={handleSubmit}>
// //                 <div className="grid md:grid-cols-2 gap-4">
// //                   <input
// //                     name="name" // ត្រូវថែម name attribute
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     className="border border-slate-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                     placeholder="John Doe"
// //                     required
// //                   />
// //                   <input
// //                     name="email" // ត្រូវថែម name attribute
// //                     type="email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     className="border border-slate-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                     placeholder="john@school.edu"
// //                     required
// //                   />
// //                 </div>

// //                 <select 
// //                   name="subject"
// //                   value={formData.subject}
// //                   onChange={handleChange}
// //                   className="border border-slate-200 rounded-lg px-4 py-3 w-full mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                 >
// //                   <option value="General Inquiry">General Inquiry</option>
// //                   <option value="Technical Support">Technical Support</option>
// //                   <option value="Admissions">Admissions</option>
// //                 </select>

// //                 <textarea
// //                   name="message"
// //                   value={formData.message}
// //                   onChange={handleChange}
// //                   required
// //                   className="border border-slate-200 rounded-lg px-4 py-3 w-full mt-4 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                   placeholder="How can we help you?"
// //                 />

// //                 <button 
// //                   type="submit"
// //                   className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow flex items-center gap-2"
// //                 >
// //                   <span>Send Message</span>
// //                   <LuSend className="mt-1" />
// //                 </button>
// //               </form>
// //             </div>

// //             {/* Sidebar រក្សាដដែល */}
// //             <div className="space-y-6 z-10">
// //               <div className="bg-white p-6 rounded-2xl shadow-md">
// //                 <h3 className="font-semibold text-slate-800">Technical Support</h3>
// //                 <p className="text-blue-600 mt-3 font-medium">+1 (800) 123-4567</p>
// //                 <p className="text-sm text-slate-500">support@edumanage.com</p>
// //               </div>
// //               <iframe title="map" className="w-full h-40 rounded-2xl shadow-md" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15635.4144577874!2d104.89216685!3d11.56236375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skh!4v1710000000000!5m2!1sen!2skh"></iframe>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Contact;
import { useState } from "react";
import { LuSend } from "react-icons/lu";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
    rating: 5,
  });

  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [statusMsg, setStatusMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(
        "https://school-management-2-5-main-cdrucp.laravel.cloud/api/feedbacks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            rating: Number(formData.rating),
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setStatusMsg("Your message was sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "General Inquiry", message: "", rating: 5 });
      } else {
        const errorData = await response.json();
        console.error("Server Error Details:", errorData);
        setStatus("error");
        setStatusMsg(errorData.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setStatus("error");
      setStatusMsg("Unable to connect to the server. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-100">
      <section className="relative h-[300px] flex items-center justify-center text-white z-1">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
          className="absolute inset-0 w-full h-full object-cover"
          alt="background"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative text-center">
          <h1 className="text-5xl font-bold">Get in Touch</h1>
          <p className="mt-3 text-slate-200 max-w-xl">
            Have questions about our school management system? We're here to
            help you digitize your institution.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-20 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 z-10">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              ✉ Send us a Message
            </h2>

            {/* ✅ Inline status banner */}
            {status === "success" && (
              <div className="mb-5 flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 rounded-xl px-4 py-3 text-sm">
                <span className="text-lg">✅</span>
                <p>{statusMsg}</p>
              </div>
            )}
            {status === "error" && (
              <div className="mb-5 flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 rounded-xl px-4 py-3 text-sm">
                <span className="text-lg">❌</span>
                <p>{statusMsg}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border border-slate-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-slate-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@school.edu"
                />
              </div>

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-slate-200 rounded-lg px-4 py-3 w-full mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Admissions">Admissions</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-slate-200 rounded-lg px-4 py-3 w-full mt-4 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="How can we help you?"
              />

              {/* ✅ Button with loading state */}
              <button
                type="submit"
                disabled={loading}
                className="mt-6 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg shadow flex items-center gap-2 transition-opacity"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <LuSend className="mt-1" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 z-10">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-slate-800">Technical Support</h3>
              <p className="text-sm text-slate-500 mt-1">Available 24/7 for troubleshooting</p>
              <p className="text-blue-600 mt-3 font-medium">+1 (800) 123-4567</p>
              <p className="text-sm text-slate-500">support@edumanage.com</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-slate-800">Admissions & Sales</h3>
              <p className="text-sm text-slate-500 mt-1">Talk to us about onboarding your school</p>
              <p className="text-blue-600 mt-3 font-medium">+1 (800) 987-6543</p>
              <p className="text-sm text-slate-500">sales@edumanage.com</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-slate-800">General Inquiries</h3>
              <p className="text-sm text-slate-500 mt-1">Visit our headquarters</p>
              <p className="text-sm text-slate-600 mt-3">123 Innovation Drive</p>
              <p className="text-sm text-slate-600">San Francisco, CA 94103</p>
            </div>

            <iframe
              title="map"
              className="w-full h-40 rounded-2xl shadow-md"
              src="https://maps.google.com/maps?q=san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;