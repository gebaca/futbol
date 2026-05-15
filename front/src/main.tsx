import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Importamos los estilos globales (donde pusiste el @import "tailwindcss")
import './index.css';
import App from './App';

// 1. Creamos una instancia del cliente de TanStack Query.
// Este objeto es el que guardará en memoria los datos de tus jugadores y entrenamientos.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Configuraciones por defecto útiles para el "campo" (Gemba):
      retry: 1, // Si falla una petición, reintenta una vez
      refetchOnWindowFocus: false, // No recargar datos solo por cambiar de pestaña
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. Envolvemos la App con el Provider para que TanStack Query funcione en cualquier parte */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
