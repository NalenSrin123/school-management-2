import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../public-site/pages/Home'
import Login from '../dashboard/pages/auth/Login'
import ResetPasswordEmail from "../public-site/pages/ResetPasswordEmail";

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin/login' element={<Login />} />
      <Route path='*' element={<Navigate to='/' replace />} />
      <Route path='/reset-email-preview' element={<ResetPasswordEmail />} />
    </Routes>
  )
}

export default AppRoutes