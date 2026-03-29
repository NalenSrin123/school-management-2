import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import VdoGuide from "../pages/VdoGuide";
import Login from "../dashboard/pages/auth/Login";
import VerificationEmail from "../public-site/pages/VerificationEmail";
import ResetPasswordEmail from "../public-site/pages/ResetPasswordEmail";
import Popular_Courses from "../public-site/pages/Popular_Courses";
import Instructor from "../public-site/pages/Instructor";
import ConfirmOTP from "../services/ConfirmOTP";
import Nav from "../components/layout/nav";
import Footer from "../public-site/layout/Footer";
import Form from "../services/Form";
import RoadMapLayout from "../dashboard/layout/RoadMapLayout";
import RoadMap from "../dashboard/components/tables/RoadMap";

// Layout component that wraps pages with Nav and Footer
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

function AppRoutes() {
  return (
    <Routes>
      {/* Public Site Pages with Layout */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/courses"
        element={
          <Layout>
            <Courses />
          </Layout>
        }
      />
      <Route
        path="/vdoguide"
        element={
          <Layout>
            <VdoGuide />
          </Layout>
        }
      />

      {/* Other Routes */}
      <Route path="/verificationemail" element={<VerificationEmail />} />
      <Route
        path="/design_popular_course_and_instructor"
        element={
          <>
            <Popular_Courses />
            <Instructor />
          </>
        }
      />
      <Route path="/admin/login" element={<Login />} />
      <Route
        path="/src/public-site/pages/reset-email-preview"
        element={<ResetPasswordEmail />}
      />
      <Route path="/ConfirmOTP" element={<ConfirmOTP />} />
      <Route path="/form/*" element={<Form />} />

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="RoadMap" element={<RoadMap></RoadMap>} />
    </Routes>
  );
}

export default AppRoutes;
