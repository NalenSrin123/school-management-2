<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contact from '../public-site/pages/Contact';
import Instructor from '../public-site/pages/Instructor';
import Popular_Courses from '../public-site/pages/Popular_Courses';
import DesingContactPageBottomSection from '../components/DesignContactPageBottomSection';
import Footer from '../public-site/layout/Footer';
import About_topsection from '../components/ui/About_topsection';
import About from '../public-site/pages/About';
import HeroSection from '../public-site/components/HeroSection';
import VideoSection from '../public-site/components/VideoSection';
import Nav from '../components/layout/nav';
import Form from '../services/Form'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form/*" element={<Form />} />
        <Route path="/form" element={<Navigate to="/form/login" replace />} />
=======
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <AppRoutes /> */}
        {/* <Design_page_forgot_password/>
        <ResetPasswordEmail/>
        <VerificationEmail/> */}
        <ConfirmOTP/>
        {/* <ConfirmPassword/>
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
        <VideoSection/> */}
      </BrowserRouter>
>>>>>>> db6c26b978d433c650465a3ba52578d03586b14d

        
        <Route
          path="/*"
          element={
            <>
              <Nav />
              <HeroSection />
              <About_topsection />
              <About />
              <Popular_Courses />
              <VideoSection />
              <Instructor />
              <DesingContactPageBottomSection />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
