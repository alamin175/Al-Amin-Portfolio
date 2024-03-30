import About from '../About/About'
import Banner from '../Banner/Banner'
import Education from '../Education/Education'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'

const Home = () => {
	return (
		<div>
			<Banner />
			<About />
			<Skills />
			<Projects />
			<Education />
		</div>
	)
}

export default Home
