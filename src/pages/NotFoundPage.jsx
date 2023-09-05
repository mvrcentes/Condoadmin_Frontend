import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Esta página no está disponible
        </h1>
        <p className="text-gray-600">
          El enlace que seguiste podría estar roto o la página puede haber sido eliminada.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
