import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  // children: [{
  //   path: "",
  //   element: <Home />
  // }, {
  //   path: "Services",
  //   element: <Services />
  // }, {
  //   path: "About",
  //   element: <AboutPage />
  // }, {
  //   path: "Reviews",
  //   element: <ReviewsPage />
  // }, {
  //   path: "Doctors",
  //   element: <DoctorsPage />,
  // }, {
  //   path: "*",
  //   element: <NotFound />
  // }]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
