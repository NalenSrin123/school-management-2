import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Nav from '../components/layout/nav';
import Footer from '../public-site/layout/Footer';
import Form from '../services/Form';
import PrepareHomePage from '../components/PrepareHomePage';
import About from '../public-site/pages/About';
import Courses from '../pages/Courses';
import VideoSection from '../public-site/components/VideoSection';
import Contact from '../pages/Contact';
import Sidebar from '../dashboard/layout/Sidebar';
import User from '../public-site/pages/User';
import FormCreateUser from '../public-site/pages/FormCreateUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={
          <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-1 p-4">
              <Outlet />
            </main>
            <Footer />
          </div>
        }>
          <Route path="/" element={<PrepareHomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/vdoguide" element={<VideoSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form/*" element={<Form />} />
          <Route path="/form" element={<Navigate to="/form/login" replace />} />
          <Route path="/*" element={<PrepareHomePage />} />
        </Route>
        <Route path="/dashboard" element={
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-64 p-8 bg-gray-50"> 
              <Outlet />
            </main>
          </div>
        }>
          <Route path="/dashboard/user" element={<User/>} />
          <Route path="/dashboard/formcreateuser" element={<FormCreateUser/>} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;