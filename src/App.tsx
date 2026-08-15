import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './sections/Hero'
import Bestsellers from './sections/Bestsellers'
import BestServices from './sections/BestServices'
import FeaturedPosts from './sections/FeaturedPosts'

function App() {
  return (
    <div className="app">
      <TopBar />
      <Header />
      <Hero />
      <Bestsellers />
      <BestServices />
      <FeaturedPosts />
    </div>
  )
}

export default App
