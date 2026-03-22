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
import DashboardLayout from '../dashboard/layout/DashboardLayout';
import CourseList from '../dashboard/pages/courses/CourseList';
import UserList from '../dashboard/pages/users/UserList';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">

        {/* Navbar */}
        <Nav />

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
            
            {/* Dashboard routes with sidebar layout */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<div className="p-6"><h1 className="text-2xl font-bold">Dashboard Overview</h1></div>} />
              <Route path="courses" element={<CourseList />} />
              <Route path="users" element={<UserList />} />
              <Route path="roadmaps" element={<div className="p-6"><h1 className="text-2xl font-bold">Road Maps</h1></div>} />
              <Route path="vdoguide" element={<div className="p-6"><h1 className="text-2xl font-bold">Video Guide Line</h1></div>} />
              <Route path="settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings</h1></div>} />
            </Route>
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
