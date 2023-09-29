import React from 'react';
import logoBackground from '../assets/logov2.png';

const backgroundStyle = {
  backgroundImage: `url(${logoBackground})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  opacity: '0.5',
  zIndex: '0',
};

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="absolute top-0 left-0 right-0 bottom-0" style={backgroundStyle} />
      <div className="bg-white p-8 rounded shadow-md" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="text-3xl font-semibold mb-4">
          Esta página no está disponible
        </h1>
        <p className="text-gray-600">
          El enlace que seguiste podría estar roto o la página puede haber sido eliminada.
        </p>
        <a
          href="/login"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full block mt-4 text-center transition duration-300 ease-in-out"
        >
          Regresar al inicio de sesión
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
