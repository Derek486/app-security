import { Button, Input } from "@material-tailwind/react"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from '../hooks/useForm.js'
import { toast } from 'react-hot-toast'
import api from "../api"

export default function Register() {
	const [form, handleForm] = useForm()
	const navigate = useNavigate()

	const register = () => {
		toast.promise(api.post('/api/register', form), {
      loading: 'Loading',
      success: 'Usuario registrado',
      error: 'Error al registrar al usuario',
    }).then((res) => {
      if (res.status === 200) {
        navigate("/auth/login")
      }
    }).catch((err) => {
			console.log(err);
			if (err.response.data) {
				toast.error(err.response.data)
			}
    })
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
						name='dni'
						size='lg'
						maxLength={8}
						color='white'
						value={form.dni || ''}
						onChange={handleForm}
						required
					/>
					<Input 
						label='Nombres'
						name='nombre'
						type='text'
						size='lg'
						color='white'
						value={form.nombre || ''}
						onChange={handleForm}
						required
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