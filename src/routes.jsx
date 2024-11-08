import { createBrowserRouter } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register'
import WeatherApp from './screens/Weather'

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
  },
  {
    path: '/',
    element: <WeatherApp />
  }
])

export default router