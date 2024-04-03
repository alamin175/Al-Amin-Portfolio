const SectionTitle = ({ title, className }) => {
	return (
		<div data-aos="fade-down">
			<h1
				className={`text-center w-fit mx-auto pb-5 px-6 mb-16 md:mb-24 text-textPrimary border-b-[5px] text-5xl md:text-6xl font-bold rounded-3xl ${className}`}
			>
				{title}
			</h1>
		</div>
	)
}

export default SectionTitle
