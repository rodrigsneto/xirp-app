import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Home from './routes/Home/Home'
import Login from "./routes/Login/Login"
import Plantonistas from "./routes/Plantonistas/Plantonistas"
import ErrorPage from './routes/ErrorPage'
import EmpresasPage from './routes/EmpresasPage'
import DeviceServicesPage from './routes/DevicesServicesPage'
// import LoginDetails from './routes/LoginDetails/LoginDetails'

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
        path: "/plantonistas",
        element: <Plantonistas />
      },
      {
        path: "/equipamentos",
        element: <DeviceServicesPage />
      },
      {
        path: "/login",
        element: <Login />
      }
      // Rota Dinamica
      // {
      //   path: "/login/:id",
      //   element: <LoginDetails/>
      // },
      // Redirecionamento
      // {
      //   path: "/oldlogin",
      //   element: <Navigate to="/login" />
      // }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
