import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Nav from "../components/layout/nav";
import Footer from "../public-site/layout/Footer";
import Form from "../services/Form";
import PrepareHomePage from "../components/PrepareHomePage";
import About from "../public-site/pages/About";
import Courses from "../pages/Courses";
import VideoSection from "../public-site/components/VideoSection";
import Contact from "../pages/Contact";
import Roadmap_form from "../dashboard/components/forms/Roadmap_form";
import DashboardLayout from "../dashboard/layout/DashboardLayout";
import CourseList from "../dashboard/pages/courses/CourseList";
import User from "../public-site/pages/User";
import RoadMap from "../dashboard/components/tables/RoadMap";
import VideoGuidlineTable from "../dashboard/components/tables/VideoGuidlineTable";

function AppContent() {
  const location = useLocation();

  // ✅ check if current route is dashboard
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar (hide in dashboard) */}
      {!isDashboard && <Nav />}

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

          {/* Dashboard */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route
              index
              element={
                <div className="p-6 md:ml-64">
                  <h1 className="text-2xl font-bold">Dashboard Overview</h1>
                </div>
              }
            />
            <Route path="courses" element={<CourseList />} />
            <Route path="users" element={<User />} />
            <Route path="roadmaps" element={<RoadMap />} />
            <Route path="vdoguide" element={<VideoGuidlineTable />} />
            <Route
              path="settings"
              element={
                <div className="p-6 md:ml-64">
                  <h1 className="text-2xl font-bold">Settings</h1>
                </div>
              }
            />
          </Route>
        </Routes>
      </main>

      {/* Footer (hide in dashboard) */}
      {!isDashboard && <Footer />}
    </div>
  );
}

function AppWrapper() {
  const location = useLocation();
  const isFormRoute = location.pathname.startsWith('/form');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar - hide on form routes */}
      {!isFormRoute && <Nav />}

      {/* Main content */}
      <main className="flex-1 p-4">
        <Routes>
          {/* Public/Form routes */}
          <Route path="/form/*" element={<Form />} />
          <Route path="/form" element={<Navigate to="/form/login" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/vdoguide" element={<VideoSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<PrepareHomePage />} />

          {/* Dashboard routes */}
          <Route path="/dashboard/*" element={<DashboardLayout />}>
            <Route index element={<div className="p-6"><h1 className="text-2xl font-bold">Dashboard Overview</h1></div>} />
            <Route path="courses" element={<CourseList />} />
            <Route path="users" element={<UserList />} />
            <Route path="roadmaps" element={<div className="p-6"><h1 className="text-2xl font-bold">Road Maps</h1></div>} />
            <Route path="vdoguide" element={<div className="p-6"><h1 className="text-2xl font-bold">Video Guide Line</h1></div>} />
            <Route path="settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings</h1></div>} />
          </Route>
        </Routes>
      </main>

      {/* Footer - hide on form routes */}
      {!isFormRoute && <Footer />}
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

