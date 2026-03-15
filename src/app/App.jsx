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
import PrepareHomePage from '../components/PrepareHomePage';
import Sidebar from '../dashboard/layout/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form/*" element={<Form />} />
        <Route path="/form" element={<Navigate to="/form/login" replace />} />
        <Route
          path="/*"
          element={
            <>
              {/* <PrepareHomePage />
              <Nav />
              <HeroSection />
              <About_topsection />
              <About />
              <Popular_Courses />
              <VideoSection />
              <Instructor />
              <DesingContactPageBottomSection />
              <Contact />
              <Footer /> */}
              {/* <Sidebar/> */}
              <Sidebar/>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
