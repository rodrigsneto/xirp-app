import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Home from './routes/Home/Home'
import Login from "./routes/Login/Login"
import ErrorPage from './routes/ErrorPage'
import EmpresasPage from './routes/EmpresasPage'
import LoginDetails from './routes/LoginDetails/LoginDetails'

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
        path: "/empresas",
        element: <EmpresasPage />
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
