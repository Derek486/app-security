import { Button, Input, Option, Textarea } from "@material-tailwind/react"
import SelectOption from "@material-tailwind/react/components/Select/SelectOption"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Formulario() {
  const navigate = useNavigate()

	const login = () => {
		navigate("/")
	}

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
			<div className="flex flex-col justify-center gap-8 backdrop-blur-lg p-8 rounded-md shadow-md text-inherit">
				<header className="flex flex-col gap-2">
					<h3 className='text-center text-blue-400 text-2xl font-bold'>Yanapay Sec</h3>
					<p className="text-white text-center">Seguridad ciudadana</p>
				</header>
        <div className="w-72 flex flex-col gap-4">
          <label className="text-white font-semibold">Tipo</label>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <input type="radio" id="option1" name="tipo" value="1" className="text-blue-600" />
              <label htmlFor="option1" className="ml-2 text-white">Robo</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="option2" name="tipo" value="2" className="text-blue-600" />
              <label htmlFor="option2" className="ml-2 text-white">Asalto</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="option2" name="tipo" value="2" className="text-blue-600" />
              <label htmlFor="option2" className="ml-2 text-white">3</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="option2" name="tipo" value="2" className="text-blue-600" />
              <label htmlFor="option2" className="ml-2 text-white">4</label>
            </div>
          </div>
        </div>
        <div className="w-72 flex flex-col gap-4">
          <div className="flex justify-between">
            <label className="text-white font-semibold">Descripcción</label>
            <button onClick={toggleVisibility}>
              <svg data-accordion-icon  className={`text-white w-3 h-3 transition-transform ${isVisible ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </div>
          {
            isVisible && (
            <Textarea
              size="lg"
              label="Descripción"
              bg="gray"
              color="gray"
            />
            )
          }
          <div className="descripction">
          
          </div>
        </div>
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
						Enviar
					</Button>
 				</div>
			</div>
    </div>
  )
}