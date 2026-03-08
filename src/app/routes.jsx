import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../public-site/pages/Home'
import Login from '../dashboard/pages/auth/Login'
import VerificationEmail from '../public-site/pages/VerificationEmail'
import ResetPasswordEmail from "../public-site/pages/ResetPasswordEmail";
import Popular_Courses from '../public-site/pages/Popular_Courses'
import Instructor from '../public-site/pages/Instructor'
import ConfirmOTP from '../services/ConfirmOTP';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/verificationemail' element={<VerificationEmail/>}/>
      <Route path='/design_popular_course_and_instructor' element={<><Popular_Courses /><Instructor /></>} />
      <Route path='/admin/login' element={<Login />} />
      <Route path='/reset-email-preview' element={<ResetPasswordEmail />} />
      <Route path='/ConfirmOTP' element={<ConfirmOTP />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default AppRoutes