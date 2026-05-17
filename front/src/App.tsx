import { useEffect, useRef } from 'react';
import { Trophy, Activity, Users } from 'lucide-react';
import gsap from 'gsap';

function App() {
  const cardRef = useRef(null);

  // Probamos GSAP: La tarjeta aparecerá con un efecto de deslizamiento suave
  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className='min-h-screen bg-slate-950 flex items-center justify-center p-6 font-sans'>
      {/* Tarjeta con estilos de Tailwind v4 */}
      <div
        ref={cardRef}
        className='max-w-md w-full bg-white rounded-4xl p-8 shadow-[0_20px_50px_rgba(8,112,184,0.3)] border border-slate-200'
      >
        <div className='flex justify-between items-start mb-8'>
          <div className='p-4 bg-green-500 rounded-2xl text-white shadow-lg shadow-green-200'>
            <Trophy size={32} />
          </div>
          <span className='text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full'>
            MVP Ready
          </span>
        </div>

        <h1 className='text-3xl font-black text-slate-900 leading-tight mb-2'>
          SaaS Fútbol <span className='text-green-600'>Academy</span>
        </h1>

        <p className='text-slate-500 mb-8 font-medium'>
          Entorno configurado con éxito: React + TS + Tailwind + GSAP + Lucide.
        </p>

        <div className='grid grid-cols-2 gap-4'>
          <div className='flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100'>
            <Users className='text-green-600' size={20} />
            <span className='text-sm font-bold text-slate-700'>Players</span>
          </div>
          <div className='flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100'>
            <Activity className='text-green-600' size={20} />
            <span className='text-sm font-bold text-slate-700'>Stats</span>
          </div>
        </div>

        <button className='w-full mt-8 bg-slate-900 text-white font-bold py-4 rounded-2xl hover:bg-green-600 transition-colors duration-300'>
          Empezar Análisis
        </button>
      </div>
    </div>
  );
}

export default App;
