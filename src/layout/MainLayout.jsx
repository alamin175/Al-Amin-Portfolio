import Navbar from '../pages/Shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Shared/Footer/Footer'
import { useEffect } from 'react'
import Aos from 'aos'

const MainLayout = () => {
	useEffect(() => {
		Aos.refresh()
	}, [])
	return (
		<div>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	)
}

export default MainLayout
