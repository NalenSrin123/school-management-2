import { BrowserRouter } from 'react-router-dom'
// import AppRoutes from './routes'
import Confim_reset_password from "../services/confim_reset_password";
import DesingContactPageBottomSection from '../components/DesignContactPageBottomSection';
function App() {
  return (
    // <BrowserRouter>
    //   <AppRoutes />
    // </BrowserRouter>
    <>
      <Confim_reset_password></Confim_reset_password>
      <DesingContactPageBottomSection/>
    </>
  )
}

export default App