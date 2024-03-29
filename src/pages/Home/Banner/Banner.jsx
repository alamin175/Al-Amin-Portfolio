import myImage from '../../../assets/images/IMG-20220801-WA0003-transformed-removebg-preview.png'
const Banner = () => {
	return (
		<div className="h-screen">
			<div
				className="grid grid-cols-2 items-center mx-auto place-items-center ml-16  mr-16"
				style={{ height: 'calc(100% - 50px' }}
			>
				<div>
					<div className="border-textPrimary border-l-8 pl-3  text-white  ">
						<h1 className="text-5xl font-bold mb-1">
							MD. Al-Amin <br />
						</h1>
						<span className="text-xl">
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

					<button className="group relative z-10 h-14 p-3 rounded-xl ml-3 mt-10 overflow-hidden  outline outline-textPrimary text-xl font-semibold text-white">
						<span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-white transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span>
						<span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-700 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span>
						<span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-900 transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span>
						<span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">
							Download CV
						</span>
						Download CV
					</button>
				</div>
				<div
					className="flex items-center flex-wrap justify-around"
					id="_ActiveAvatar_NavigateUI"
				>
					<div className="relative group">
						<img
							className="size-[300px] bg-textPrimary object-cover rounded-full"
							src={myImage}
							alt="avatar navigate ui"
						/>
						<span className="size-5 bg-pink-500 absolute rounded-full bottom-5 right-9 border-[3px] border-white"></span>
						<span className="size-5 bg-pink-500 absolute rounded-full bottom-5 right-9 animate-ping"></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Banner
