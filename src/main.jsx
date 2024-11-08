import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import './index.css'

import { Toaster } from 'react-hot-toast'

function ToastLayout({ children }) {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      {children}
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <ToastLayout>
    <RouterProvider router={router} />
  </ToastLayout>
)
