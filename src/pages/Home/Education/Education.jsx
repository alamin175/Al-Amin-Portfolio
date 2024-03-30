import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import table from '../../../assets/images/education.jpg'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
	return (
		<div className="mb-16 h-screen">
			<SectionTitle title="Education" />
			<div className="flex justify-center items-center gap-10  mx-auto">
				<div className="my-4">
					<div className="flex items-center gap-4 bg-textPrimary text-textSecondary p-8 rounded-3xl hover:bg-emerald-300 mb-6">
						<FaGraduationCap className="text-5xl" />
						<div>
							<h1 className="text-4xl font-bold">Secondary Education</h1>
							<p>Batch : SSC 2020</p>
							<p>Institute: Badda High School</p>
						</div>
					</div>
					<div className="flex items-center gap-4 bg-textPrimary text-textSecondary px-8 py-5 rounded-3xl hover:bg-emerald-300">
						<FaGraduationCap className="text-5xl" />
						<div>
							<h1 className="text-4xl font-bold">Diploma Engineering</h1>
							<p>Session : 2020-2021</p>
							<p>
								Department:{' '}
								<span className="font-bold">
									Computer Science & Technology
								</span>
							</p>
							<p>
								Institute: Govt. Graphic Arts Institute (Mohammadpur)
							</p>
						</div>
					</div>
				</div>

				<img src={table} className="w-1/3" alt="" />
			</div>
		</div>
	)
}

export default Education
