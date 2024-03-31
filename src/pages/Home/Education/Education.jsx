import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import table from '../../../assets/images/education.jpg'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
	return (
		<div className="h-screen mt-20 mb-16 ">
			<SectionTitle title="Education" />
			<div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10  mx-auto">
				<div className="my-4">
					<div
						className="flex items-center gap-4 bg-textPrimary text-textSecondary  p-2 md:p-8 rounded-3xl hover:bg-emerald-300 mb-6 mx-2 lg:mx-4"
						data-aos="fade-right"
						data-aos-anchor-placement="bottom-bottom"
					>
						<FaGraduationCap className="text-5xl" />
						<div>
							<h1 className="text-2xl md:text-4xl font-bold">
								Secondary Education
							</h1>
							<p>Batch : SSC 2020</p>
							<p>Institute: Badda High School</p>
						</div>
					</div>
					<div
						className="flex mx-2 lg:mx-4 items-center gap-4 bg-textPrimary text-textSecondary p-2 md:px-8 md:py-5 rounded-3xl hover:bg-emerald-300"
						data-aos="fade-right"
						data-aos-anchor-placement="bottom-bottom"
						data-aos-delay="200"
					>
						<FaGraduationCap className="text-5xl" />
						<div>
							<h1 className="text-2xl md:text-4xl font-bold">
								Diploma Engineering
							</h1>
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

				<img src={table} className="w-2/3 md:w-1/3 flex" alt="" />
			</div>
		</div>
	)
}

export default Education
