import SectionTitle from '../../../components/SectionTitle/SectionTitle'

const About = () => {
	return (
		<div className="h-screen">
			<SectionTitle title="My Details"></SectionTitle>
			<div
				style={{ boxShadow: '' }}
				className="m-20 border font-mono shadow-lg shadow-textPrimary  border-textPrimary text-gray-400 p-8 rounded-lg text-lg"
			>
				<p>
					My name is Md. Al-Amin. I am a junior frontend developer{' '}
					<span className="font-bold font-sans text-textPrimary">
						(MERN Based)
					</span>
					. I have also knowledge about Backend technology like Node js
					(Server), Express js (Server), Mongo DB (Database), React Js
					(Frontend), Firebase authentication, JWT Token and etc. <br />
				</p>
				<p className=" mt-4">
					I'm Also a self learner on all technology. I'm currently studying
					Diploma in Engineering in{' '}
					<span className="font-bold font-sans text-textPrimary">
						Computer Science and Technology(CST)
					</span>{' '}
					in the final Year.
				</p>
			</div>
		</div>
	)
}

export default About
