import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import UseStateContainer from './containers/UseStateContainer'
import UseEffectContainer from './containers/UseEffectContainer'
import UseCallbackContainer from './containers/UseCallbackContainer'
import ErrorPage from './components/common/errorpage'
import './index.css'
import UseMemoContainer from './containers/UseMemoContainer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeContainer />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/usestate',
    element: <UseStateContainer />,
  },
  {
    path: '/useeffect',
    element: <UseEffectContainer />,
  },
  {
    path: '/usecallback',
    element: <UseCallbackContainer />,
  },
  {
    path: '/usememo',
    element: <UseMemoContainer />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
