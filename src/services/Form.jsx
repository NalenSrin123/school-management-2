import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../services/Login";
import Design_page_forgot_password from "../services/Design_page_forgot_password";
import ResetPasswordEmail from "../public-site/pages/ResetPasswordEmail";
import VerificationEmail from "../public-site/pages/VerificationEmail";
import ConfirmOTP from "./ConfirmOTP";
import Confirm_reset_password from "../services/confim_reset_password";
import RegisterForm from "../dashboard/components/forms/register_form";

const Form = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="login" replace />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="forgot-password" element={<Design_page_forgot_password />} />
      <Route path="reset-email" element={<ResetPasswordEmail />} />
      <Route path="verify-email" element={<VerificationEmail />} />
      <Route path="confirm-otp" element={<ConfirmOTP />} />
      <Route path="confirm-reset" element={<Confirm_reset_password />} />
    </Routes>
  );
};

export default Form;