
import Nav from './layout/nav'
import HeroSection from '../public-site/components/HeroSection'
import Popular_Courses from '../public-site/pages/Popular_Courses'
import Instructor from '../public-site/pages/Instructor'

const PrepareHomePage = () => {
  return (
    <div>
        <Nav />
        <HeroSection />
        <Popular_Courses />
        <Instructor />
    </div>
  )
}

export default PrepareHomePage