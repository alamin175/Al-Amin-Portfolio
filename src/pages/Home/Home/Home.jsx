import About from '../About/About'
import Banner from '../Banner/Banner'
import Education from '../Education/Education'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
	return (
		<div>
			<Banner />
			<About />
			<Skills />
			<Projects />
			<Education />
			<Testimonials />
		</div>
	)
}

export default Home
