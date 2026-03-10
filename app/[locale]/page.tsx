import ContactForm from '../../components/ContactForm'
import Features from '../../components/Features'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import HowItWorks from '../../components/HowItWorks'
import Navbar from '../../components/Navbar'
import PhoneDemo from '../../components/PhoneDemo'
import Pricing from '../../components/Pricing'
import StatsBar from '../../components/StatsBar'

export default function HomePage() {
	return (
		<main>
			<Navbar />
			<Hero />
			<StatsBar />
			<Features />
			<PhoneDemo />
			<HowItWorks />
			<Pricing />
			<ContactForm />
			<Footer />
		</main>
	)
}
