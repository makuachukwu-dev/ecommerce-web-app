import easyWinsIcon from '../assets/icons/easy-wins.svg'
import concreteIcon from '../assets/icons/concrete.svg'
import hackGrowthIcon from '../assets/icons/hack-growth.svg'
import './BestServices.css'

const SERVICES = [
  {
    icon: easyWinsIcon,
    title: 'Easy Wins',
    description: 'Get your best looking smile now!',
  },
  {
    icon: concreteIcon,
    title: 'Concrete',
    description: 'Defalcate is most focused in helping you discover your most beautiful smile',
  },
  {
    icon: hackGrowthIcon,
    title: 'Hack Growth',
    description: 'Overcame any hurdle or any other problem.',
  },
]

function BestServices() {
  return (
    <section className="best-services">
      <div className="best-services__heading">
        <p className="best-services__eyebrow">Featured Products</p>
        <h2 className="best-services__title">THE BEST SERVICES</h2>
        <p className="best-services__subtitle">Problems trying to resolve the conflict between</p>
      </div>
      <div className="best-services__grid">
        {SERVICES.map((service) => (
          <div key={service.title} className="best-services__card">
            <img src={service.icon} alt={service.title} className="best-services__icon" />
            <h3 className="best-services__card-title">{service.title}</h3>
            <p className="best-services__card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BestServices
