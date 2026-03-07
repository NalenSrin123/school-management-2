import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import RegisterForm from '../dashboard/components/forms/register_form.jsx'
function App() {
  return (
    <BrowserRouter>
      <RegisterForm/>
    </BrowserRouter>
  )
}

export default App