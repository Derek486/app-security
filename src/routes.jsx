import { createBrowserRouter } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register'

const router = createBrowserRouter([
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
    ],
  }
])

export default router