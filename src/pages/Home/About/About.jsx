import SectionTitle from '../../../components/SectionTitle/SectionTitle'

const About = () => {
	return (
		<div id="about" className="md:h-screen">
			<SectionTitle title="My Details"></SectionTitle>
			<div
				className="m-5 md:m-20 border font-mono shadow-lg shadow-textPrimary  border-textPrimary text-gray-400 p-4 md:p-8  mb-24 rounded-lg text-lg"
				data-aos="zoom-in"
				data-aos-anchor-placement="center-bottom"
			>
				<p>
					My name is Md. Al-Amin. I am a junior frontend developer{' '}
					<span className="font-bold font-sans text-textPrimary">
						(MERN Based)
					</span>
					. I have also knowledge about Backend technology like Node js
					(Server), Express js, Mongo DB (Database), React Js (Frontend),
					Firebase authentication, JWT Token and etc. <br />
				</p>
				<p className=" mt-4">
					I'm Also a self learner on all technology. I'm currently studying
					Diploma in Engineering in{' '}
					<span className="font-bold font-sans text-textPrimary">
						Computer Science and Technology(CST)
					</span>{' '}
					in the final Year. I'm focusing on programming right now.
				</p>
			</div>
		</div>
	)
}

export default About
