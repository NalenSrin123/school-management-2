import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Design_page_forgot_password from "../services/Design_page_forgot_password";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Design_page_forgot_password />
    </>
  )
}

export default App