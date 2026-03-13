import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <AppRoutes /> */}
        {/* <Design_page_forgot_password/>
        <ResetPasswordEmail/>
        <VerificationEmail/> */}
        <ConfirmOTP/>
        {/* <ConfirmPassword/>
        <Login/>
        <Contact/>
        <Instructor/>
        <Popular_Courses/>
        <DesingContactPageBottomSection/>
        <Register/>
        <Footer/>
        <CourseCatalog/>
        <About_topsection/>
        <About/>
        <HeroSection/>
        <VideoSection/> */}
      </BrowserRouter>

    </>
  )
}

export default App;
