import { useEffect, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import Marquee from 'react-fast-marquee'
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
	const [reviews, setReviews] = useState([])
	useEffect(() => {
		fetch('reviews.json')
			.then(res => res.json())
			.then(data => setReviews(data))
	}, [])

	return (
		<div>
			<SectionTitle title="Testimonials" />
			<div>
				<Marquee>
					{reviews.map(review => (
						<div
							key={review.id}
							className="border-4 w-[370px]  md:w-[500px] border-textPrimary  m-4 md:m-10 text-start p-4 md:p-10 rounded-tl-[75px] rounded-br-[75px]"
						>
							<div className="flex justify-between items-center">
								<div className="flex justify-center items-center m-3">
									{/* <FaUserCircle className="text-6xl mx-4" /> */}
									<img className="w-24" src={review.image} alt="" />
									<div className="text-gray-300">
										<h1 className="text-2xl font-bold">
											{review.name}
										</h1>
										<p>
											From :
											<span className=" ml-2">
												{review.location}
											</span>
										</p>
									</div>
								</div>
								<FaQuoteLeft className="text-4xl md:text-6xl text-textPrimary" />
							</div>
							<div className="md:py-2 md:p-4 text-lg text-gray-400 mx-auto">
								<p>{review.details}</p>
							</div>
						</div>
					))}
				</Marquee>
			</div>
		</div>
	)
}

export default Testimonials
