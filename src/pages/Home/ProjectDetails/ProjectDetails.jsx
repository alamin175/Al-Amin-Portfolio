import { useLoaderData } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'

const ProjectDetails = () => {
	const project = useLoaderData()
	console.log(project.allImage)

	const [currentSlider, setCurrentSlider] = useState(0)
	const carouselImages = project.allImage
	const prevSlider = () =>
		setCurrentSlider(currentSlider =>
			currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
		)
	const nextSlider = useCallback(
		() =>
			setCurrentSlider(currentSlider =>
				currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
			),
		[carouselImages.length]
	)

	// if you don't want to change the slider automatically then you can just remove the useEffect
	useEffect(() => {
		const intervalId = setInterval(() => {
			nextSlider()
		}, 3000)
		return () => clearInterval(intervalId)
	}, [nextSlider])

	return (
		<div className="mb-16 mt-2 ">
			<div className="h-60 w-2/3 mx-auto md:h-[470px] lg:h-2/3 relative overflow-hidden">
				{/* arrow left */}
				<button
					onClick={prevSlider}
					className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
				>
					<svg
						className="w-4 h-4 md:w-6 md:h-6 icon"
						viewBox="0 0 1024 1024"
						xmlns="http://www.w3.org/2000/svg"
						fill="#000000"
					>
						<g strokeWidth="0"></g>
						<g
							id="SVGRepo_tracerCarrier"
							strokeLinecap="round"
							strokeLinejoin="round"
						></g>
						<g id="SVGRepo_iconCarrier">
							<path
								fill="#0095FF"
								d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
							></path>
						</g>
					</svg>
				</button>
				{/* arrow right */}
				<button
					onClick={nextSlider}
					className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
				>
					<svg
						className="w-4 h-4 md:w-6 md:h-6 icon"
						viewBox="0 0 1024 1024"
						xmlns="http://www.w3.org/2000/svg"
						fill="#000000"
						transform="rotate(180)"
					>
						<g strokeWidth="0"></g>
						<g
							id="SVGRepo_tracerCarrier"
							strokeLinecap="round"
							strokeLinejoin="round"
						></g>
						<g id="SVGRepo_iconCarrier">
							<path
								fill="#0095FF"
								d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
							></path>
						</g>
					</svg>
				</button>
				{/* dots */}
				<div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
					{carouselImages.map((_, inx) => (
						<button
							key={_}
							onClick={() => setCurrentSlider(inx)}
							className={`rounded-full duration-500 bg-white ${
								currentSlider === inx ? 'w-8' : 'wz-2'
							} h-2`}
						></button>
					))}
				</div>
				{/* Carousel container */}
				<div
					className="ease-linear duration-500 flex transform-gpu"
					style={{ transform: `translateX(-${currentSlider * 100}%)` }}
				>
					{/* sliders */}
					{carouselImages.map((slide, inx) => (
						<img
							key={slide}
							src={slide}
							className="min-w-full h-full bg-black/20 object-cover"
							alt={`Slider - ${inx + 1}`}
						/>
					))}
				</div>
			</div>
			<div className="">
				<h1 className="text-5xl mx-8 mb-6 border-l-8 border-textPrimary p-4 font-bold text-white">
					Project Details
				</h1>
				<div className="ml-16 text-xl  font-serif">
					<h1 className="text-gray-400 mb-4 flex">
						<span className="w-44">Project Name</span>
						<span className="text-textPrimary">{project.name}</span>
					</h1>
					<h1 className="text-gray-400 mb-4 flex">
						<span className="w-44">Project Title</span>
						<span className="text-textPrimary">{project.title}</span>
					</h1>
					<h1 className="text-gray-400 mb-4 flex">
						<span className="w-44">About Project</span>
						<span className="text-textPrimary max-w-[60ch]">
							{project.details}
						</span>
					</h1>
					<h1 className="text-gray-400 mb-4 flex">
						<span className="w-44">Technology Used</span>
						<span className="text-textPrimary max-w-[60ch]">
							{project.technology}
						</span>
					</h1>
					<h1 className="text-gray-400 mb-6 flex">
						<span className="w-44">Live Site Link</span>
						<a href={project.link} target="blank">
							<span className="text-textPrimary underline underline-offset-8">
								{project.link}
							</span>
						</a>
					</h1>
					<h1 className="text-gray-400 mb-4 flex">
						<span className="w-44">Github Repository</span>
						<a href={project.github} target="blank">
							<span className="text-textPrimary underline underline-offset-8">
								{project.github}
							</span>
						</a>
					</h1>
				</div>
			</div>
		</div>
	)
}

export default ProjectDetails
