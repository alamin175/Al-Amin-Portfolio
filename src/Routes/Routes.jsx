import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home/Home/Home'
import NotFound from '../pages/NotFoundPage/NotFound'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
		],
	},
	{
		path: '*',
		element: <NotFound></NotFound>,
	},
])

export default router
