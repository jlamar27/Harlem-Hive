import Hero from './subcomponents/Hero'
import WhoWeAre from './subcomponents/WhoWeAre'
import WhyGrappling from './subcomponents/WhyGrappling'
import FAQ from './subcomponents/FAQ'

export default function index() {
  return (
    <div>
        <Hero />
        <WhoWeAre />
        <WhyGrappling />
        <FAQ />
    </div>
  )
}