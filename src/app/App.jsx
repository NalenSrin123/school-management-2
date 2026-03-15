

import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Design_page_forgot_password from "../services/Design_page_forgot_password";
import ResetPasswordEmail from '../public-site/pages/ResetPasswordEmail';
import VerificationEmail from '../public-site/pages/VerificationEmail';
import ConfirmOTP from '../services/ConfirmOTP';
import ConfirmPassword from '../services/confim_reset_password';
import ForgotPassword from '../services/Design_page_forgot_password';
import Login from '../services/Login';
import Contact from '../public-site/pages/Contact';
import Instructor from '../public-site/pages/Instructor';
import Popular_Courses from '../public-site/pages/Popular_Courses';
import DesingContactPageBottomSection from '../components/DesignContactPageBottomSection';
import Register from '../dashboard/components/forms/register_form';
import Footer from '../public-site/layout/Footer';
import CourseCatalog from '../dashboard/pages/courses/CourseCreate';
import About_topsection from '../components/ui/About_topsection';
import About from '../public-site/pages/About';
import Header from '../dashboard/layout/Header';
import HeroSection from '../public-site/components/HeroSection';
import VideoSection from '../public-site/components/VideoSection';
import User from '../public-site/pages/User';


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <AppRoutes /> */}
        <Design_page_forgot_password/>
        <ResetPasswordEmail/>
        <VerificationEmail/>
        <ConfirmOTP/>
        <ConfirmPassword/>
        <Login/>
        <Contact/>
        <Instructor/>
        <Popular_Courses/>
        <DesingContactPageBottomSection/>
        <Register/>
        <Footer/>
        <CourseCatalog/>
        <About_topsection/>
        <About/>
        <HeroSection/>
        <VideoSection/>
        <User/>
      </BrowserRouter>

    </>
  )
}

export default App;