import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Popular_Courses from '../public-site/pages/Popular_Courses'
import Instructor from '../public-site/pages/Instructor'
function App() {
  return (
    // <BrowserRouter>
    //   <AppRoutes />
    // </BrowserRouter>
    <div>
      <Popular_Courses></Popular_Courses>
      <Instructor></Instructor>
    </div>
  )
}

export default App