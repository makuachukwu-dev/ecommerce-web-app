import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './sections/Hero'
import Bestsellers from './sections/Bestsellers'
import BestServices from './sections/BestServices'
import FeaturedPosts from './sections/FeaturedPosts'
import Testimonials from './sections/Testimonials'
import CtaBanner from './sections/CtaBanner'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="app">
      <TopBar />
      <Header />
      <Hero />
      <Bestsellers />
      <BestServices />
      <FeaturedPosts />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </div>
  )
}

export default App
