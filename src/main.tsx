import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import UseStateContainer from './containers/UseStateContainer'
import UseEffectContainer from './containers/UseEffectContainer'
import ErrorPage from './components/common/errorpage'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeContainer />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/usestate",
    element: <UseStateContainer />,
  },
  {
    path: "/useeffect",
    element: <UseEffectContainer />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
