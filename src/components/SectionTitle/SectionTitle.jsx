const SectionTitle = ({ title }) => {
	return (
		<div>
			<h1 className="text-center w-9/12 md:w-1/2 lg:w-4/12 mx-auto pb-5 px-4 m-8 mb-24 md:mb-32 text-textPrimary border-b-[5px] text-5xl md:text-6xl font-bold rounded-3xl">
				{title}
			</h1>
		</div>
	)
}

export default SectionTitle
