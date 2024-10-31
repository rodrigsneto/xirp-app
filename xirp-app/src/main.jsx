import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Home from './routes/Home'
import Login from "./routes/Login"
import ErrorPage from './routes/ErrorPage'
import LoginDetails from './routes/LoginDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/login/:id",
        element: <LoginDetails/>
      },
      {
        path: "/oldlogin",
        element: <Navigate to="/login" />
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
