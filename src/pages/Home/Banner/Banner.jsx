import { Link } from 'react-router-dom'
import myImage from '../../../../public/assets/images/user-vector/alamin.png'
import { FaArrowRight, FaArrowUp } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import resume from '../../../../public/assets/Resume/Alamin-Resume.pdf'
import { HashLink } from 'react-router-hash-link'

const Banner = () => {
	const [isVisible, setIsVisible] = useState(false)

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY > 0)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className="h-screen">
			<div
				className="grid grid-cols-1 flex-row-reverse md:grid-cols-2 items-center  place-items-center mx-8 md:mx-16  "
				style={{ height: 'calc(100% - 70px' }}
			>
				<div
					className="order-last md:order-first"
					data-aos="fade-down-right"
				>
					<div className="border-textPrimary border-l-8 pl-3  text-white  ">
						<h1 className="text-4xl  md:text-5xl font-bold mb-1">
							MD. Al-Amin <br />
						</h1>
						<span className=" md:text-xl">
							{'< Junior Frontend Developer />'}
						</span>
					</div>
					<div>
						<p className="max-w-[40ch] ml-6 mt-6 text-gray-400 font-semibold">
							{' '}
							As a programmer, one should never cease learning, for
							continuous learning and practice are the cornerstones of
							achieving perfection in programming.
						</p>
					</div>

					<div>
						<a href={resume} download="Alamin-Resume">
							<button className="group relative z-10 h-14 p-3 rounded-xl ml-3 m-10 overflow-hidden  outline outline-textPrimary text-xl font-semibold text-white">
								<span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-white transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span>
								<span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-700 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span>
								<span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-900 transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span>
								<span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">
									Download CV
								</span>
								Download CV
							</button>
						</a>
						<HashLink smooth to="#contacts">
							<button className="h-14 p-3 px-4  rounded-xl outline outline-textPrimary text-xl font-semibold ml-3  text-textSecondary bg-textPrimary hover:bg-white">
								<span className="flex items-center  gap-4 ">
									Contacts <FaArrowRight />
								</span>
							</button>
						</HashLink>
					</div>
				</div>
				<div className="flex items-center " id="_ActiveAvatar_NavigateUI">
					<div
						className="relative group order-first md:order-last"
						data-aos="fade-down-left"
					>
						<img
							className="size-[300px]  bg-textPrimary object-cover rounded-full"
							src={myImage}
							alt="Image"
						/>
						<span className="size-5 bg-emerald-600 absolute rounded-full bottom-5 right-9 border-[3px] border-white"></span>
						<span className="size-5 bg-emerald-600 absolute rounded-full bottom-5 right-9 animate-ping"></span>
					</div>
				</div>
			</div>

			{/* Scroll to top button */}
			<div>
				<Link
					to="#"
					onClick={scrollToTop}
					className={`fixed bottom-8 right-8 z-10 ${isVisible ? 'block' : 'hidden'
						}`}
				>
					<FaArrowUp className="text-4xl md:text-5xl bg-white text-textSecondary font-bold p-2 rounded-full hover:bg-textPrimary" />
				</Link>
			</div>
		</div>
	)
}

export default Banner
