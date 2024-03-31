const SectionTitle = ({ title, className }) => {
	return (
		<div>
			<h1
				className={`text-center w-fit mx-auto pb-5 px-6 m-8 mb-24 md:mb-32 text-textPrimary border-b-[5px] text-5xl md:text-6xl font-bold rounded-3xl ${className}`}
			>
				{title}
			</h1>
		</div>
	)
}

export default SectionTitle
