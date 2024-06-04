import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginForm } from './pages/auth/Login.tsx'
import { SignupForm } from './pages/auth/Signup.tsx'
import Home from './pages/home/Home.tsx'
import PrivateRoute from './routes/PrivateRoute.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginForm />
      },
      {
        path: "/signup",
        element: <SignupForm />
      },
      {
        path: "/home",
        element: <PrivateRoute><Home /></PrivateRoute>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    l<RouterProvider router={router} />
  </React.StrictMode>,
)
