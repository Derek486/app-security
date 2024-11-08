import { createBrowserRouter } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register'
import App from './screens/App'
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
    path: 'app',
    element: <App />
  }
])

export default router