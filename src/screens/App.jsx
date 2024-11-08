export default function App() {
  return (
    <>
      <div className="">
        <div className="container text-center mt-4">
          <div>logo</div>
          <div>
            <button className="bg-black rounded-full p-3">
              <i className="p-1 text-white text-xl font-bold bi bi-power"></i>
            </button>
          </div>
          <div className="m-4">
            <p><span>Seguridad</span> - <span>Rapidez</span> - <span>Eficiencia</span></p>
          </div>
          <div className="m-3">
            <a href="" class="py-2 px-5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
              Login
            </a>
            <a href="" class="ms-2 py-2 px-5 bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
              Register
            </a>
          </div>
        </div> 
      </div>
    </>
  );
}
