import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io5'
import {
	SiAxios,
	SiExpress,
	SiFirebase,
	SiMongodb,
	SiTailwindcss,
} from 'react-icons/si'
import { TbBrandFramerMotion } from 'react-icons/tb'
import tanstackImg from '../../../assets/images/tanstack-query.JPG'

import { FaBootstrap, FaHtml5, FaNode, FaReact } from 'react-icons/fa'

const Skills = () => {
	return (
		<div className="lg:h-screen mt-20 overflow-hidden">
			<SectionTitle title="Skills"></SectionTitle>
			<div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 ml-10 lg:ml-0 items-center md:place-items-center gap-10">
				<div>
					<div className="my-3" data-aos="fade-right">
						<h1 className="flex  items-center gap-5 text-2xl">
							<FaHtml5 className="text-4xl text-orange-500" />
							HTML 5
						</h1>
					</div>
					<div className="my-3" data-aos="fade-right" data-aos-delay="150">
						<h1 className="flex  items-center gap-5 text-2xl">
							<IoLogoCss3 className="text-4xl text-sky-600" />
							CSS 3
						</h1>
					</div>
					<div className="my-3" data-aos="fade-right" data-aos-delay="200">
						<h1 className="flex items-center gap-5 text-2xl">
							<IoLogoJavascript className="text-4xl text-yellow-500" />
							Java Script
						</h1>
					</div>
					<div className="my-3" data-aos="fade-right" data-aos-delay="250">
						<h1 className="flex items-center gap-5 text-2xl">
							<SiTailwindcss className="text-4xl text-sky-500" />
							Tailwind Css
						</h1>
					</div>
					<div className="my-3" data-aos="fade-right" data-aos-delay="300">
						<h1 className="flex items-center gap-5 text-2xl">
							<FaBootstrap className="text-4xl text-violet-500" />
							Bootstrap
						</h1>
					</div>
				</div>
				<div>
					<div className="my-3" data-aos="zoom-in">
						<h1 className="flex items-center gap-5 text-2xl">
							<SiAxios className="text-4xl text-sky-600" />
							Axios
						</h1>
					</div>
					<div className="my-4" data-aos="zoom-in" data-aos-delay="150">
						<h1 className="flex items-center gap-5 text-2xl">
							<FaReact className="text-4xl text-blue-400" />
							React Js
						</h1>
					</div>
					<div className="my-3" data-aos="zoom-in" data-aos-delay="200">
						<h1 className="flex  items-center gap-5 text-2xl">
							<FaNode className="text-4xl text-green-500" />
							Node Js
						</h1>
					</div>
					<div className="my-3" data-aos="zoom-in" data-aos-delay="250">
						<h1 className="flex  items-center gap-5 text-2xl">
							<SiExpress className="text-4xl text-sky-600" />
							Express Js
						</h1>
					</div>

					<div className="my-3" data-aos="zoom-in" data-aos-delay="300">
						<h1 className="flex items-center gap-5 ml-2 text-2xl">
							<img className="w-7" src={tanstackImg} alt="" />
							Tanstack Query
						</h1>
					</div>
				</div>
				<div>
					<div className="my-3" data-aos="fade-left">
						<h1 className="flex  items-center gap-5 text-2xl">
							<SiMongodb className="text-4xl text-green-500" />
							Mongo Db
						</h1>
					</div>
					<div className="my-3" data-aos="fade-left" data-aos-delay="150">
						<h1 className="flex  items-center gap-5 text-2xl">
							<SiFirebase className="text-4xl text-yellow-500" />
							Firebase
						</h1>
					</div>
					<div className="my-4" data-aos="fade-left" data-aos-delay="250">
						<h1 className="flex items-center gap-5 text-2xl">
							<TbBrandFramerMotion className="text-4xl text-black bg-white" />
							Framer Motion
						</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
