import './styles/HomePage.scss';
import FirstSection from "../components/HomePageComponents/FirstSection"
import FourthSection from "../components/HomePageComponents/FourthSection"
import SecondSection from "../components/HomePageComponents/SecondSection"
import ThirdSection from "../components/HomePageComponents/ThirdSection"
import TiltSection from "../components/HomePageComponents/TiltSection"
import FifthSection from '../components/HomePageComponents/FifthSection';
import Footer from '../components/Global/Footer/Footer';

function HomePage() {
  return (
    <div>
      <div className="first-section">
        <FirstSection />
      </div>
      
      <div className="tilt-section">
        <TiltSection />
      </div>
      <div className="space-intilt"></div>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <div className="tilt-section">
      <FifthSection />
      </div>
      <div className="space-in-fifth"></div>
      <div className="footer">
        <Footer />
      </div>
      
    </div>
  )
}

export default HomePage