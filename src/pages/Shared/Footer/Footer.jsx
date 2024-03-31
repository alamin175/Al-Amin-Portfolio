import {
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
} from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdAddIcCall, MdEmail } from 'react-icons/md'
import Contacts from '../../../components/Contacts/Contacts'
import footerimg from '../../../../src/assets/images/footer.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'

const Footer = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${footerimg})`,
				backgroundSize: 'cover',
				height: 'fit-content',
			}}
			className="md:mt-20 w-full pb-10"
		>
			<div className="pt-6 ">
				<SectionTitle title="Find Me" />
				<div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center -mt-16 gap-10 md:gap-20 mx-6">
					{/* Contact form */}
					<Contacts />

					<div className="flex flex-col gap-4">
						<a
							href="https://www.facebook.com/profile.php?id=100024270469893"
							target="blank"
						>
							<span className="flex items-center gap-5 text-xl hover:text-blue-400">
								<FaFacebook className="text-4xl" />
								/Facebook
							</span>
						</a>
						<a href="https://www.github.com/alamin175" target="blank">
							<span className="flex items-center gap-5 text-xl hover:text-gray-300">
								<FaGithub className="text-4xl" />
								/Github
							</span>
						</a>
						<a
							href="https://www.instagram.com/mdalaminh052"
							target="blank"
						>
							<span className="flex items-center gap-5 text-xl hover:text-red-400">
								<FaInstagram className="text-4xl" />
								/Instagram
							</span>
						</a>
						<a href="https://twitter.com/al_amin175" target="blank">
							<span className="flex items-center gap-5 text-xl hover:text-blue-400">
								<FaTwitter className="text-4xl" />
								/Twitter
							</span>
						</a>
						<a
							href="https://www.linkedin.com/in/md-al-amin-6ba828244"
							target="blank"
						>
							<span className="flex items-center gap-5 text-xl hover:text-blue-600">
								<FaLinkedin className="text-4xl" />
								/Linkedin
							</span>
						</a>
					</div>
					<div className="flex flex-col gap-2">
						<span className="flex items-center gap-5">
							<FaLocationDot className="text-4xl" /> North Badda,
							Gulshan, Dhaka-1212
						</span>
						<a href="mailto:mdalaminh052@gmail.com">
							<span className="flex items-center gap-5 hover:text-gray-300">
								<MdEmail className="text-4xl" /> mdalaminh052@gmail.com
							</span>
						</a>
						<span className="flex items-center gap-5">
							<MdAddIcCall className="text-4xl" /> +88 01586075605
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
