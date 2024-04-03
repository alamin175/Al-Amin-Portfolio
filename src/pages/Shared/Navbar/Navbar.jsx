import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'

const NavBar = () => {
	const [dropDownState, setDropDownState] = useState(false)
	const dropDownMenuRef = useRef()

	useEffect(() => {
		const closeDropDown = e => {
			if (!dropDownMenuRef?.current?.contains(e?.target)) {
				setDropDownState(false)
			}
		}

		document.addEventListener('mousedown', closeDropDown)

		return () => {
			document.removeEventListener('mousedown', closeDropDown)
		}
	}, [])

	const listing = (
		<>
			<li className="group flex  cursor-pointer flex-col">
				<HashLink
					smooth
					to="/#home"
					scroll={el => el.scrollIntoView({ behavior: 'instant' })}
				>
					Home
				</HashLink>
				<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			<li className="group flex  cursor-pointer flex-col">
				<HashLink smooth to="/#about">
					About
				</HashLink>
				<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			<li className="group flex  cursor-pointer flex-col">
				<HashLink smooth to="/#skills">
					Skills
				</HashLink>
				<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			<li className="group flex  cursor-pointer flex-col">
				<HashLink smooth to="/#projects">
					Projects
				</HashLink>
				<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
			<li className="group flex  cursor-pointer flex-col">
				<HashLink smooth to="/#contacts">
					Contacts
				</HashLink>
				<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-textPrimary text-textPrimary transition-all duration-300 group-hover:w-full"></span>
			</li>
		</>
	)

	return (
		<nav className="flex justify-end relative p-4 h-[70px] text-white ">
			<ul className="hidden items-center justify-between text-textPrimary text-lg font-semibold  gap-10 md:flex">
				{listing}
			</ul>
			<div
				ref={dropDownMenuRef}
				onClick={() => setDropDownState(!dropDownState)}
				className="relative flex transition-transform md:hidden"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="cursor-pointer"
				>
					{' '}
					<line x1="4" x2="20" y1="12" y2="12" />{' '}
					<line x1="4" x2="20" y1="6" y2="6" />
					<line x1="4" x2="20" y1="18" y2="18" />{' '}
				</svg>
				{dropDownState && (
					<ul className=" z-10 p-4 gap-2 bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base font-bold text-textPrimary">
						{listing}
					</ul>
				)}
			</div>
		</nav>
	)
}
export default NavBar
