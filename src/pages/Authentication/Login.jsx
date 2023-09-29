import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from "../../components/FetchData/FetchData"
import logoBackground from '../../assets/logov2.png'

const Login = ({ setToken }) => {

  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const data = await logIn(nombre, contrasena)

      // console.log(`user error? ->>> ${data.error}`)

      if (data.error) {
        setShowErrorNotification(true)
        setUserExists(true)
      }


      const { admin, username } = data.user.user_metadata;
      // console.log(`user admin? ->>> ${admin}`)
      // console.log(`user username? ->>> ${username}`)

      if (admin) {
        sessionStorage.setItem("token", JSON.stringify(data))
        setToken(data)
        navigate('/admin/services');
      } else if (!admin) {
        sessionStorage.setItem("token", JSON.stringify(data))
        setToken(data)
        navigate('/resident/announce');
      }

    } catch (error) {
      // Manejo de errores
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setTimeout(() => {
      setShowPassword(prevShowPassword => !prevShowPassword);
    }, 800);
  };

  const backgroundStyle = {
    backgroundImage: `url(${logoBackground})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    opacity: '0.1',
    zIndex: '0',
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="absolute top-0 left-0 right-0 bottom-0" style={backgroundStyle} />
      <div className="bg-white p-8 rounded shadow-md w-80" style={{ position: 'relative', zIndex: 1 }}>
        {showErrorNotification && (
          <div id="toast-default" className="fixed flex top-5 right-5 items-center w-full max-w-xs p-4 text-gray-700 bg-white rounded-lg shadow" role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-white bg-red-500 rounded-lg">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
              </svg>
            </div>
            <div className="ml-3 text-sm font-normal">Usuario o contraseña incorrectos.</div>
            <button onClick={() => setShowErrorNotification(false)} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-default" aria-label="Close">
              <span className="sr-only">Cerrar</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </button>
          </div>
        )}
        <h2 className="text-2xl font-semibold mb-4 text-center">Iniciar Sesión</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="nombre" className="block font-medium">
              Nombre de usuario
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className={`w-full border rounded py-2 px-3 mt-1 ${userExists ? 'border-red-500 animate-shake' : ''}`}
              value={nombre}
              onChange={(e) => { setNombre(e.target.value); setShowErrorNotification(false); setUserExists(false) }}
              required
            />
          </div>
          <div>
            <div className='relative'>
              <label htmlFor="contrasena" className="block font-medium">
                Contraseña
              </label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="contrasena"
                  name="contrasena"
                  className="w-full border rounded py-2 px-3 mt-1 pr-10"
                  value={contrasena}
                  onChange={(e) => { setContrasena(e.target.value); setShowErrorNotification(false); setUserExists(false) }}
                  required
                />
                <button
                  type="button"
                  className="absolute top-1.5 right-7 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-y-0 mt-3 h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.293 8.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l-2 2m0 0l-2-2m2 2v-8m0 8h8m-8 0l2-2"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-y-0 mt-3 h-5 w-5 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M10 2a8 8 0 100 16 8 8 0 000-16zM1.27 9.293a9.956 9.956 0 000 1.414l2.122 2.122a7.963 7.963 0 010-1.414L1.27 9.293zm2.122-2.122a9.956 9.956 0 011.414 0l2.122-2.122a7.963 7.963 0 00-1.414 0L3.392 7.171zm10.606 0a7.963 7.963 0 00-1.414 0L16.608 5.05a9.956 9.956 0 011.414 0l-2.122 2.122zm-1.414 7.778a7.963 7.963 0 001.414 0L15.392 14.95a9.956 9.956 0 01-1.414 0l2.122-2.122zM10 16a6 6 0 110-12 6 6 0 010 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
