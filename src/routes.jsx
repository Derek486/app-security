import { createBrowserRouter } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register'
import App from './screens/App'
import Formulario from './screens/Formulario'
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
  },
  {
    path: 'formulario',
    element: <Formulario />
  }
])

export default router