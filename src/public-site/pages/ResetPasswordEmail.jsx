import { Link } from "react-router-dom";

export default function ResetPasswordEmail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Top accent bar */}
        <div className="h-1.5 from-blue-500 via-blue-600 to-indigo-600" />

        <div className="px-5 pt-7 pb-5 sm:px-8 sm:pt-8 sm:pb-6 text-center">

          {/* Logo */}
          <div className="flex flex-col items-center mb-5 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-md mb-2 sm:mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-gray-400 uppercase">EduFlow Systems</span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 mb-5 sm:mb-6" />

          {/* Heading */}
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Reset Your Password</h1>

          {/* Greeting */}
          <p className="text-left text-gray-700 text-sm font-semibold mb-3">
            Hi <span className="text-blue-600">[User Name]</span>,
          </p>

          {/* Body text */}
          <p className="text-left text-gray-500 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
            We received a request to reset the password for your Enterprise School Management System account.
            If you didn't make this request, you can safely ignore this email.
            No changes will be made to your account.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-5 sm:mb-6">
            <Link
              to="/form"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-6 sm:px-8 py-3 rounded-xl transition-colors duration-200 text-sm shadow-md shadow-blue-200 w-full sm:w-auto justify-center"
            >
              Reset Password
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Fallback link box */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-left mb-4">
            <p className="text-xs text-gray-400 mb-1">
              If the button above doesn't work, copy and paste this link into your browser:
            </p>
            <p className="text-xs text-blue-500 break-all font-mono leading-relaxed">
              https://eduflow-systems.com/auth/reset-password?token=8k2i3h4l5k6j7h8g9f0d1s2a3p4o5i6u7y8t9r0e
            </p>
          </div>

          {/* Security warning */}
          <div className="flex items-start gap-2 sm:gap-3 bg-amber-50 border border-amber-200 rounded-lg p-3 text-left">
            <div className="mt-0.5 w-5 h-5 flex-shrink-0 bg-amber-400 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
            </div>
            <p className="text-xs text-amber-700 leading-relaxed">
              <span className="font-bold">For your security:</span> This link will expire in 2 hours. After that, you'll need to submit a new request.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mx-5 sm:mx-8" />

        {/* Footer */}
        <div className="px-5 sm:px-8 py-5 sm:py-6 text-center">
          <p className="text-xs text-gray-400 mb-3 leading-relaxed">
            Need help? Contact our support team at{" "}
            <a
              href="mailto:support@eduflow.com"
              className="text-blue-500 hover:underline font-medium break-all sm:break-normal"
            >
              support@eduflow.com
            </a>
          </p>

          {/* Social icons */}
          <div className="flex justify-center gap-3 mb-4">
            <a
              href="#"
              className="w-8 h-8 sm:w-7 sm:h-7 bg-gray-100 hover:bg-blue-100 active:bg-blue-200 rounded-md flex items-center justify-center transition-colors touch-manipulation"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 sm:w-7 sm:h-7 bg-gray-100 hover:bg-blue-100 active:bg-blue-200 rounded-md flex items-center justify-center transition-colors touch-manipulation"
              aria-label="Privacy Policy"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 sm:w-7 sm:h-7 bg-gray-100 hover:bg-blue-100 active:bg-blue-200 rounded-md flex items-center justify-center transition-colors touch-manipulation"
              aria-label="Website"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
              </svg>
            </a>
          </div>

          <p className="text-xs font-semibold tracking-widest text-gray-300 uppercase mb-1">EDUFLOW SYSTEMS INC.</p>
          <p className="text-xs text-gray-300">123 Innovation Drive, Tech Campus Suite 400</p>
          <p className="text-xs text-gray-300">Silicon Valley, CA 94025, United States</p>
        </div>

      </div>
    </div>
  );
}