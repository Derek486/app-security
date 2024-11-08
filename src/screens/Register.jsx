import { Button, Input } from "@material-tailwind/react"
import { Link, useNavigate } from "react-router-dom"

export default function Register() {
	const navigate = useNavigate()

	const register = () => {
		navigate("/")
	}

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
			<div className="flex flex-col justify-center gap-8 backdrop-blur-lg p-8 rounded-md shadow-md text-inherit">
				<h3 className='text-center text-blue-400 text-2xl font-bold'>Security AQP</h3>
				<div className="w-72 flex flex-col gap-4">
					<Input 
						label='DNI'
						type='number'
						size='lg'
						color='white'
					/>
					<Input 
						label='Nombres'
						type='text'
						size='lg'
						color='white'
					/>
				</div>
				<div className='flex flex-col gap-2'>
					<Button onClick={register} className='bg-blue-400' type='submit' size='md'>
						Registrarse
					</Button>
          <div className="flex gap-2 justify-center text-white">
            <p>
              ¿Ya tiene una cuenta? 
            </p>
            <Link to={'/auth/login'} className="text-blue-400 hover:text-blue-300 transition-colors">Login</Link>
          </div>
				</div>
			</div>
    </div>
  )
}