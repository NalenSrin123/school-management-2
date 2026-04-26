import React from 'react';
import { Link } from 'react-router-dom';

function VerificationEmail() {
  const code = ["4", "8", "2", "9", "1", "5"];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 mb-8">
        <div className="bg-blue-600 p-2 rounded-xl">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M12 2L0 9l12 7l10-5.833V17.5h2V9zM3.999 13.49V18a9.99 9.99 0 0 0 8 4A9.99 9.99 0 0 0 20 18v-4.509l-8 4.667z"/></svg>
        </div>
        <span className="text-xl font-black text-slate-800">Eduflow</span>
      </div>
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden text-center">
        <div className="bg-blue-50 h-32 flex items-center justify-center relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
          <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg z-10">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Your Verification Code</h2>
          <p className="text-gray-500 text-sm mb-8 px-4">
            Please use the 6-digit code below to complete your sign-in process for the Enterprise School Management System.
          </p>

          <div className="flex justify-center gap-2 mb-8">
            {code.map((num, i) => (
              <div key={i} className="w-12 h-14 bg-blue-50/50 border border-blue-100 rounded-xl flex items-center justify-center text-xl font-bold text-blue-600">
                {num}
              </div>
            ))}
          </div>

          <div className="w-full inline-flex justify-center items-center gap-2 bg-blue-50 px-4 py-2 rounded-5xl text-xs text-gray-500 mb-8">
            <span className="text-blue-500 text-base"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48"><path fill="#2b54e9" d="M24 5c10.493 0 19 8.507 19 19s-8.507 19-19 19S5 34.493 5 24S13.507 5 24 5m-1.25 7c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h8a1.25 1.25 0 1 0 0-2.5H24V13.25c0-.69-.56-1.25-1.25-1.25"/></svg></span>
            <span>This code will expire in <span className="font-bold text-slate-800">10 minutes</span>.</span>
          </div>

          <Link
            to="/form/confirm-otp"
            className="inline-block w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
          >
            Continue to Verify OTP
          </Link>

          <p className="text-[11px] text-gray-400 leading-relaxed px-6">
            If you did not request this code, please ignore this email or contact support if you suspect unauthorized access.
          </p>
        </div>

        <div className="bg-blue-50 border-t border-gray-100 py-4 flex items-center justify-center gap-2 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#2b54e9" d="M6.616 21q-.667 0-1.141-.475T5 19.386v-8.77q0-.666.475-1.14T6.615 9H8V7q0-1.671 1.165-2.835Q10.329 3 12 3t2.836 1.165T16 7v2h1.385q.666 0 1.14.475t.475 1.14v8.77q0 .666-.475 1.14t-1.14.475zm6.45-4.934q.434-.433.434-1.066t-.434-1.066T12 13.5t-1.066.434Q10.5 14.367 10.5 15t.434 1.066q.433.434 1.066.434t1.066-.434M9 9h6V7q0-1.25-.875-2.125T12 4t-2.125.875T9 7z"/></svg>
          <span> SECURE VERIFICATION SYSTEM</span>
        </div>
      </div>
      
      <div className="mt-8 flex gap-6 text-xs font-bold text-gray-400">
        <a href="#" className="hover:text-blue-600 transition-colors">Contact Support</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-blue-600 transition-colors">System Status</a>
      </div>
      <div className='flex gap-6 justify-center items-center py-5'>
          <div className='rounded-full bg-gray-200 w-[35px] h-[35px] flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2048 2048"><path fill="#757676" d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 126-29 244t-84 225t-132 196t-174 161t-208 118t-237 68v-716h239l45-296h-284V832q0-55 18-87t48-48t68-21t79-5h42q21 0 41 1V420q-56-10-114-15t-115-5q-93 0-165 28t-121 80t-75 125t-26 165v226H604v296h260v716q-125-19-237-67t-208-118t-173-161t-132-197t-84-224t-30-245q0-141 36-272t104-244t160-207t207-161T752 37t272-37"/></svg>
          </div>
          <div className='rounded-full bg-gray-200 w-[35px] h-[35px] flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#757676" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518a3.3 3.3 0 0 0 1.447-1.817a6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429a3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218a3.2 3.2 0 0 1-.865.115a3 3 0 0 1-.614-.057a3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/></svg>        
            </div>
          <div className='rounded-full bg-gray-200 w-[35px] h-[35px] flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#757676" d="M17.303 2.25H6.697A4.447 4.447 0 0 0 2.25 6.697v10.606a4.447 4.447 0 0 0 4.447 4.447h10.606a4.447 4.447 0 0 0 4.447-4.447V6.697a4.447 4.447 0 0 0-4.447-4.447m-8.46 15.742a.4.4 0 0 1-.4.423h-1.78a.41.41 0 0 1-.4-.412V10.6a.4.4 0 0 1 .4-.411h1.78a.4.4 0 0 1 .4.411zM7.52 8.632a1.467 1.467 0 1 1 .022-2.935A1.467 1.467 0 0 1 7.52 8.63m10.817 9.35a.39.39 0 0 1-.378.388H16.08a.39.39 0 0 1-.378-.389v-3.424c0-.511.156-2.223-1.356-2.223c-1.179 0-1.412 1.2-1.457 1.734v3.991a.39.39 0 0 1-.378.39h-1.823a.39.39 0 0 1-.389-.39v-7.493a.39.39 0 0 1 .39-.378h1.822a.39.39 0 0 1 .39.378v.645a2.59 2.59 0 0 1 2.434-1.112c3.035 0 3.024 2.835 3.024 4.447z"/></svg>  
            </div>
      </div>
      <div className="text-gray-400 text-center text-[10px] py-6">
        <p>© 2024 EduFlow Enterprise School Management System. All rights reserved.</p>
        <p>123 Education Plaza, Academic District, Tech City 54321</p>
        <p className="mt-2">
          You received this email because it's required for security verification on your account.
        </p>
      </div>
    </div>
  );
}

export default VerificationEmail;