import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from '../components/layout/nav';
import Footer from '../public-site/layout/Footer';
import Form from '../services/Form';
import PrepareHomePage from '../components/PrepareHomePage';
import About from '../public-site/pages/About';
import Courses from '../pages/Courses';
import VideoSection from '../public-site/components/VideoSection';
import Contact from '../pages/Contact';
import Roadmap_form from '../dashboard/components/forms/Roadmap_form';
import Sidebar from '../dashboard/layout/Sidebar';
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">

        {/* Navbar */}
        {/* <Nav /> */}

        {/* Main content */}
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/form/*" element={<Form />} />
            <Route path="/form" element={<Navigate to="/form/login" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/vdoguide" element={<VideoSection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PrepareHomePage />} />
            <Route path="/dashboard" element={<Sidebar />} />
          </Routes>
        </main>

        {/* Footer */}
        {/* <Footer /> */}

      </div>
    </BrowserRouter>
  );
}

export default App;