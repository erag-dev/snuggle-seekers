import { Suspense, lazy } from "react"
import { 
	HashRouter,
	// BrowserRouter as Router, 
	Routes, 
	Route,
} from "react-router-dom"

import AppLoader from "components/AppLoader"

const HomePage = lazy(() => import('pages/Home'));
const AboutPage = lazy(() => import('pages/About'));
const AdoptPage = lazy(() => import('pages/Adopt'));
const SelectedPetPage = lazy(() => import('pages/SelectedPet'));
const ContactPage = lazy(() => import('pages/Contact'));
const DonatePage = lazy(() => import('pages/Donate'));

/* ----------------------------
	Error Pages
   ---------------------------- */
const ErrorPageNotFound = lazy(() => import('pages/Error404'));
// const ErrorPageUnauthorized = lazy(() => import('pages/ErrorUnauthorized'));


// ********************************************************************************************************************************
// ********************************************************************************************************************************

const routes = () => {

	return (		
		<HashRouter>
			<Suspense fallback={<AppLoader isShow={true} />}>
				<Routes>

					<Route
						path ="/"
						element={<HomePage/>} 
					/>

					<Route
						path ="about"
						element={<AboutPage/>} 
					/>

					<Route
						path ="adopt"
						element={<AdoptPage/>} 
					/>

					<Route
						path ="pet"
						element={<SelectedPetPage/>} 
					/>

					<Route
						path ="contact"
						element={<ContactPage/>} 
					/>

					<Route
						path ="donate"
						element={<DonatePage/>} 
					/>

					<Route path="*" element={<ErrorPageNotFound/>} />
					{/* <Route path="unauthorized" element={<ErrorPageUnauthorized/>} /> */}

				</Routes>
			</Suspense>
		</HashRouter>
	)
};

export default routes