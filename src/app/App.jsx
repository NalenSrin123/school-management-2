import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Form from "../services/Form";
import PrepareHomePage from "../components/PrepareHomePage";
import About from "../public-site/pages/About";
import Courses from "../pages/Courses";
import VideoSection from "../public-site/components/VideoSection";
import Contact from "../pages/Contact";
import Course from "../dashboard/components/tables/Course";
import Sidebar from "../dashboard/layout/Sidebar";
import DashboardLayout from "../dashboard/layout/DashboardLayout";
import CourseList from "../dashboard/pages/courses/CourseList";
import UserList from "../dashboard/pages/users/UserList";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/course" element={<Course />} />
            <Route path="/form/*" element={<Form />} />
            <Route
              path="/form"
              element={<Navigate to="/form/login" replace />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/vdoguide" element={<VideoSection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PrepareHomePage />} />

            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route
                index
                element={
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">Dashboard Overview</h1>
                  </div>
                }
              />
              <Route path="courses" element={<CourseList />} />
              <Route path="users" element={<UserList />} />
              <Route
                path="roadmaps"
                element={
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">Road Maps</h1>
                  </div>
                }
              />
              <Route
                path="vdoguide"
                element={
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">Video Guide Line</h1>
                  </div>
                }
              />
              <Route
                path="settings"
                element={
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">Settings</h1>
                  </div>
                }
              />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
