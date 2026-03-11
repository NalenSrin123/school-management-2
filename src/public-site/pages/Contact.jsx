import { LuSend } from "react-icons/lu";
const Contact = () => {
  return (
    <>
      <div className="bg-slate-100 ">
        <section className="relative h-[300px] flex items-center justify-center text-white z-1">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
            className="absolute inset-0 w-full h-full object-cover "
          />
          <div className="absolute inset-0  bg-slate-900/70"></div>

          <div className="relative text-center">
            <h1 className="text-5xl font-bold">Get in Touch</h1>
            <p className="mt-3 text-slate-200 max-w-xl">
              Have questions about our school management system? We're here to
              help you digitize your institution.
            </p>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-6 -mt-20 pb-20 ">
          <div className="grid lg:grid-cols-3 gap-8 ">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 z-10">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                ✉ Send us a Message
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  className="border border-slate-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
                <input
                  className="border border-slate-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@school.edu"
                />
              </div>

              <select className="border border-slate-200 rounded-lg px-4 py-3 w-full mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Admissions</option>
              </select>

              <textarea
                className="border border-slate-200 rounded-lg px-4 py-3 w-full mt-4 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="How can we help you?"
              />

              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow flex items-center gap-2">
                <p>Send Message </p>
                <LuSend className="mt-1" />
              </button>
            </div>

            <div className="space-y-6 z-10">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold text-slate-800">
                  Technical Support
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Available 24/7 for troubleshooting
                </p>
                <p className="text-blue-600 mt-3 font-medium">
                  +1 (800) 123-4567
                </p>
                <p className="text-sm text-slate-500">support@edumanage.com</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold text-slate-800">
                  Admissions & Sales
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Talk to us about onboarding your school
                </p>
                <p className="text-blue-600 mt-3 font-medium">
                  +1 (800) 987-6543
                </p>
                <p className="text-sm text-slate-500">sales@edumanage.com</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold text-slate-800">
                  General Inquiries
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Visit our headquarters
                </p>
                <p className="text-sm text-slate-600 mt-3">
                  123 Innovation Drive
                </p>
                <p className="text-sm text-slate-600">
                  San Francisco, CA 94103
                </p>
              </div>

              <iframe
                className="w-full h-40 rounded-2xl shadow-md"
                src="https://maps.google.com/maps?q=san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
