export default function App() {
  return (
    <>
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="flex flex-col justify-center gap-8 backdrop-blur-lg p-8 rounded-md shadow-md text-inherit">
          <div>
          <h3 className='text-center text-blue-400 text-2xl font-bold'>Yanapay Sec</h3>
					<p className="text-white text-center">Seguridad ciudadana</p>
          </div>
          <div className="flex items-center justify-center">
            <a href="" className="bg-black rounded-full flex p-6 items-center justify-center w-20 h-20">
              <i className="text-white text-4xl font-black bi bi-power shadow-lg"></i>
            </a>
          </div>
          <div className="m-4 text-center">
            <p className="text-lg font-semibold text-center">
              <span className="text-gray-300 font-black">Seguridad</span>
              <span className="mx-2 text-gray-200 font-bold">•</span>
              <span className="text-gray-700">Rapidez</span>
              <span className="mx-2 text-gray-500 font-bold">•</span>
              <span className="text-gray-300">Eficiencia</span>
            </p>
          </div>
          <div className="text-center m-3">
            <a href="auth/login" class="py-2 px-5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
              Login
            </a>
            <a href="auth/register" class="ms-2 py-2 px-5 bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
              Register
            </a>
          </div>
        </div> 
      </div>
    </>
  );
}
