import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Statistics from './components/Statistics'
import Blog from './components/Blog'
import AppliedJobs from './components/AppliedJobs'
import ErrorPage from './components/ErrorPage'
import Details from './components/Details'
import Home from './components/Home/Home'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async ()=> fetch('/jobList.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/applied_jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: async ({params}) => fetch('/jobList.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
