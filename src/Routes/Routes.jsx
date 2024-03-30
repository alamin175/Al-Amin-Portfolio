import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home/Home/Home'
import NotFound from '../pages/NotFoundPage/NotFound'
import ProjectDetails from '../pages/Home/ProjectDetails/ProjectDetails'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: 'project-details/:id',
				element: <ProjectDetails></ProjectDetails>,
				loader: async ({ params }) => {
					const response = await fetch(`/projects.json`)
					const data = await response.json()
					const project = data.find(
						project => project.id === parseInt(params.id)
					)
					return project
				},
			},
		],
	},
	{
		path: '*',
		element: <NotFound></NotFound>,
	},
])

export default router
