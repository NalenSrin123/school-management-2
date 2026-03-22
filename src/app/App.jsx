import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import RoadMap from '../dashboard/components/tables/RoadMap';

function AppContent() {
  const location = useLocation();


  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="flex flex-col min-h-screen">

    
      {!isDashboard && <Nav />}

      <main className="flex-1 p-4">
        <Routes>
          <Route path="/form/*" element={<Form />} />
          <Route path="/form" element={<Navigate to="/form/login" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/vdoguide" element={<VideoSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<PrepareHomePage />} />

          <Route
            path="/dashboard"
            element={
              <div className="flex">
                <Sidebar />
                <div className="flex-1 p-4">
                  <RoadMap />
                </div>
              </div>
            }
          />
          <Route
            path="/dashboard/roadmap/create"
            element={
              <div className="flex">
                <Sidebar />
                <div className="flex-1 p-4">
                  <Roadmap_form />
                </div>
              </div>
            }
          />
        </Routes>
      </main>

      {!isDashboard && <Footer />}

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;