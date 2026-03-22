import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "../components/layout/nav";
import Footer from "../public-site/layout/Footer";
import Form from "../services/Form";
import PrepareHomePage from "../components/PrepareHomePage";
import About from "../public-site/pages/About";
import Courses from "../pages/Courses";
import VideoSection from "../public-site/components/VideoSection";
import Contact from "../pages/Contact";
import Course from "../dashboard/components/tables/Course";
import Roadmap_form from "../dashboard/components/forms/Roadmap_form";
import Sidebar from "../dashboard/layout/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/course" element={<Course />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
