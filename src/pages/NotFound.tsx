// src/pages/NotFound.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="page flex flex-col items-center justify-center text-center py-10">
      <Helmet>
        <title>Sayfa Bulunamadı</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-4">404 - Sayfa Bulunamadı</h2>
      <p className="mb-6">Aradığınız sayfa bulunamadı.</p>
      <Link to="/" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
        Ana Sayfaya Dön
      </Link>
    </div>
  );
};

export default NotFound;
