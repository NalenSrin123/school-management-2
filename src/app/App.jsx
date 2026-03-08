import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import HeroSection from '../public-site/components/HeroSection'

function App() {

  return (

    <BrowserRouter>
      <AppRoutes />
      <HeroSection />
    </BrowserRouter>
  )
}

export default App