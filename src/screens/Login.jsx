import { Button, Input } from "@material-tailwind/react"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
	const navigate = useNavigate()

	const login = () => {
		navigate("/")
	}

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
			<div className="flex flex-col justify-center gap-8 backdrop-blur-lg p-8 rounded-md shadow-md text-inherit">
				<header className="flex flex-col gap-2">
					<h3 className='text-center text-blue-400 text-2xl font-bold'>Yanapay Sec</h3>
					<p className="text-white text-center">Seguridad ciudadana</p>
				</header>
				<div className="w-72 flex flex-col gap-4">
					<Input 
						label='DNI'
						type='number'
						size='lg'
						color='white'
					/>
				</div>
				<div className='flex flex-col gap-2'>
					<Button onClick={login} className='bg-blue-400' type='submit' size='md'>
						Iniciar sesión
					</Button>
          <div className="flex justify-center gap-2 text-white">
            <p>
              ¿No tiene una cuenta? 
            </p>
            <Link to={'/auth/register'} className="text-blue-400 hover:text-blue-300 transition-colors">Registrar</Link>
          </div>
				</div>
			</div>
    </div>
  )
}