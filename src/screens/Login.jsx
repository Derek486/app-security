import { Button, Input } from "@material-tailwind/react"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
	const navigate = useNavigate()

	const login = () => {
		navigate("/")
	}

  return (
    <div className="h-screen flex justify-center items-center bg-fondo_v1 bg-cover bg-no-repeat">
			<div className="flex flex-col justify-center gap-8 backdrop-blur-lg p-8 rounded-md shadow-md text-inherit">
				<h3 className='text-center text-blue-tecsup-100 text-2xl font-bold'>Partidos tecsup</h3>
				<div className="w-72 flex flex-col gap-4">
					<Input 
						label='Usuario (Email)'
						type='email'
						size='lg'
						color='light-blue'
					/>
					<Input 
						label='Contraseña'
						type='password'
						size='lg'
						color='light-blue'
					/>
				</div>
				<div className='flex flex-col gap-2'>
					<Button onClick={login} className='bg-blue-tecsup-200' type='submit' size='lg'>
						Iniciar sesión
					</Button>
					<Link 
						to={'partidos'}
						className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none gap-3 bg-smoke">
						Ver partidos 
					</Link>
				</div>
			</div>
    </div>
  )
}