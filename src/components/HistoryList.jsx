import { useState } from "react";

function HistoryList({
  historial,
  limpiarHistorial,
  limpiarAnuncio,
  usarAnuncio,
}) {
  const [copiado, setCopiado] = useState(false);
  function copiar(texto) {
    navigator.clipboard.writeText(texto);
    setCopiado(true);
    const tiempoEspera = 3000;

    setTimeout(() => {
      setCopiado(false);
    }, tiempoEspera);
  }

  const historialOrdenado = [...historial];
  historialOrdenado.reverse();
  return (
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-6 mt-5">
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
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-slate-800">Historial</h2>
        <button
          onClick={limpiarHistorial}
          className="text-xs text-white bg-red-600 hover:bg-red-700 rounded-lg p-2 font-medium cursor-pointer"
        >
          Borrar historial
        </button>
      </div>

      {historialOrdenado.map((anuncio) => (
        <div
          key={anuncio.id}
          className="flex justify-between items-center bg-slate-100 backdrop-opacity-70 rounded-lg mt-5 p-4"
        >
          <div className="max-w-fit mr-0.5 ">
            <h3 className="text-lg font-semibold text-slate-800">
              {anuncio.titulo}
            </h3>
            <p>{anuncio.descripcion}</p>
          </div>
          <div className="flex gap-2 text-white">
            <button
              onClick={() => limpiarAnuncio(anuncio.id)}
              className="cursor-pointer bg-red-600 hover:bg-red-700 p-1.5 rounded-2xl"
              title="Borrar anuncio"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
            <button
              onClick={() => usarAnuncio(anuncio)}
              className="cursor-pointer bg-slate-700 hover:bg-slate-800 text-white p-1.5 rounded-2xl"
              title="Usar anuncio"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
            <button
              title="Copiar anuncio"
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded-2xl"
              onClick={() =>
                copiar(`${anuncio.titulo}\n${anuncio.descripcion}`)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HistoryList;
