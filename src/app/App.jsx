import { BrowserRouter, Routes, Route, Navigate , Outlet} from 'react-router-dom';
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
import User from '../public-site/pages/User';
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

            {/* --- ២. Dashboard Layout: បង្ហាញ Sidebar និង Main(Content) គ្មាន Nav/Footer --- */}
        <Route path="/dashboard" element={
          <div className="flex min-\h-screen">
            <Sidebar /> {/* Sidebar ប្រើ class 'fixed' ក្នុងកូដរបស់អ្នក */}
            <Outlet />
          </div>
        }>
          <Route path="user" element={<User />} />
          <Route path="nnnn" element={<div>NNNN</div>} />
        </Route>
          <Route path="/*" element={<PrepareHomePage />} />
            

          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;