import { useState } from "react";

function ResultCard({ tituloGenerado, descripcionGenerada }) {
  const [copiado, setCopiado] = useState(false);
  function copiar(texto) {
    navigator.clipboard.writeText(texto);
    setCopiado(true);
    const tiempoEspera = 3000;

    setTimeout(() => {
      setCopiado(false);
    }, tiempoEspera);
  }
  return (
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-6">
      {copiado === true && (
        <div
          className="flex items-start sm:items-center mb-4 text-sm text-green-200 bg-green-900 p-4 rounded-2xl"
          role="alert"
        >
          <svg
            className="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p>
            <span className="font-medium me-1">Copiado!</span>
          </p>
        </div>
      )}
      <div className="mb-4">
        <div className="flex justify-between items-center space-x-5">
          <h2 className="text-lg font-semibold text-slate-800">
            Título sugerido
          </h2>
          <button
            className="cursor-pointer flex space-x-2"
            onClick={() => copiar(tituloGenerado)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
              />
            </svg>
          </button>
        </div>

        <p className="text-sm text-slate-700">{tituloGenerado}</p>
      </div>

      <div>
        <div className="flex justify-between items-center space-x-5">
          <h2 className="text-lg font-semibold text-slate-800">
            Descripción sugerida
          </h2>
          <button
            className="cursor-pointer flex space-x-2"
            onClick={() => copiar(descripcionGenerada)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
              />
            </svg>
          </button>
        </div>

        <p className="text-sm text-slate-700">{descripcionGenerada}</p>
      </div>
    </div>
  );
}

export default ResultCard;
