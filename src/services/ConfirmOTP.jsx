import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLock } from '@fortawesome/free-solid-svg-icons';

const ConfirmOTP = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieves email dynamically from the navigation state
  const email = location.state?.email || "user@university.edu"; 

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(60);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = async () => {
    const fullOtp = otp.join("");
    if (fullOtp.length < 6) return;

    setIsVerifying(true);
    setStatus({ type: '', message: '' });

    try {
      // Logic to send OTP and Email to the backend for verification
      const response = await fetch('https://your-api-endpoint.com/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp: fullOtp, email: email }),
      });
      if (response.ok) {
        setStatus({ type: 'success', message: 'Your OTP is successful' });
        // Navigate to reset password page after successful verification
        setTimeout(() => {
          navigate('/form/confirm-reset');
        }, 1500);
      } else {
        setStatus({ type: 'error', message: 'Invalid OTP. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Server error. Please try again later.' });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = async () => {
    if (timer > 0) return; 
    setTimer(60);
    setStatus({ type: '', message: '' });
    setOtp(new Array(6).fill(""));
    try {
      await fetch('https://your-api-endpoint.com/resend-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email }),
      });
      setStatus({ type: 'success', message: 'A new code has been sent.' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to resend. Please try again.' });
    }
  };

  return (
    <div className="w-full sm:w-50% max:w-[40%] m-auto bg-white flex flex-col items-center justify-center p-4 md:p-1 lg:p-4  font-sans">
      <div className="flex items-center gap-2 mb-5">
        <div className="bg-[#1D4ED8] p-2 rounded-lg shadow-sm text-white w-10 h-10 flex items-center justify-center text-xl">
          <FontAwesomeIcon icon={faGraduationCap} />
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
          EduManage <span className="text-[#1D4ED8]">Enterprise</span>
        </h1>
      </div>

      <div className="bg-white rounded-[35px] sm:rounded-[45px] shadow-sm border border-slate-100 w-full max-w-md p-6 sm:p-10 flex flex-col items-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-[#1D4ED8] text-xl sm:text-2xl">
          <FontAwesomeIcon icon={faLock} />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Two-Step Verification</h2>
        <p className="text-slate-400 text-center text-[12px] sm:text-[13px] mb-8 leading-relaxed">
          Enter the 6-digit code sent to your institutional<br/>
          email <span className="text-slate-700 font-semibold break-all">{email}</span>
        </p>

        {/* Responsive input grid */}
        <div className="flex justify-center gap-1 sm:gap-2 mb-8">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={(el) => (inputRefs.current[index] = el)}
              value={data}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`w-11 h-12 sm:w-12 sm:h-14 border-2 rounded-xl text-center text-lg sm:text-xl font-bold transition-all outline-none
                ${data ? 'border-[#1D4ED8]' : 'border-slate-200'} focus:border-[#1D4ED8]`}
            />
          ))}
        </div>

        {status.message && (
          <div className={`w-full mb-4 text-center text-sm font-semibold p-2 rounded-lg ${
            status.type === 'success' ? 'text-green-600 bg-green-50' : 'text-red-500 bg-red-50'
          }`}>
            {status.message}
          </div>
        )}

        
        <button 
          onClick={() => navigate('/')}
          className="w-full bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold py-3 sm:py-4 rounded-xl shadow-lg shadow-blue-100 transition-all text-base mb-8"
        >
          Continue to Reset Password
        </button>
       

        <div className="text-center mb-8 sm:mb-10">
          <p className="text-slate-400 text-xs mb-2">Didn't receive the code?</p>
          <div className="flex items-center justify-center gap-2">
            <button 
                onClick={handleResend} 
                disabled={timer > 0}
                className={`font-semibold text-sm ${timer > 0 ? 'text-slate-300 cursor-not-allowed' : 'text-blue-500 hover:underline'}`}
            >
              Resend code
            </button>
            <span className="bg-slate-50 text-black-400 px-2 py-1 rounded text-[10px] font-mono border border-slate-100">
              00:{timer.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-slate-500 font-medium text-xs hover:text-blue-400 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Login
        </button>
      </div>

      <p className="mt-5 text-[8px] font-bold text-slate-300 tracking-[0.3em] uppercase">
        Secure Enterprise Environment
      </p>
    </div>
  );
};

export default ConfirmOTP;