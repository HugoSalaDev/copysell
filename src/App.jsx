import { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ResultCard from "./components/ResultCard";
import HistoryList from "./components/HistoryList";

function App() {
  const [producto, setProducto] = useState("");
  const [marca, setMarca] = useState("");
  const [estado, setEstado] = useState("");
  const [caracteristicas, setCaracteristicas] = useState("");
  const [tituloGenerado, setTituloGenerado] = useState("");
  const [descripcionGenerada, setDescripcionGenerada] = useState("");
  const [error, setError] = useState("");
  const [historial, setHistorial] = useState(() => {
    const datosHistorial = localStorage.getItem("anuncio");
    if (datosHistorial) {
      return JSON.parse(datosHistorial);
    }
    return [];
  });

  const generarAnuncio = () => {
    const productoLimpio = producto.trim();
    const marcaLimpia = marca.trim();
    const estadoLimpio = estado.trim();
    const caracteristicasLimpias = caracteristicas.trim();
    let tituloFinal = "";
    let descripcionFinal = "";
    if (productoLimpio === "" || marcaLimpia === "" || estadoLimpio === "") {
      setError("ERROR: Faltan campos por cubrir.");
      return;
    }
    tituloFinal = `${productoLimpio} ${marcaLimpia} ${estadoLimpio}`;
    setTituloGenerado(tituloFinal);

    if (caracteristicasLimpias !== "") {
      descripcionFinal = `Vendo ${productoLimpio} de la marca ${marcaLimpia} en estado ${estadoLimpio}. Características ${caracteristicasLimpias}`;
      setDescripcionGenerada(descripcionFinal);
    } else {
      descripcionFinal = `Vendo ${productoLimpio} de la marca ${marcaLimpia} en estado ${estadoLimpio}.`;
      setDescripcionGenerada(descripcionFinal);
    }

    const nuevoAnuncio = {
      id: crypto.randomUUID(),
      titulo: tituloFinal,
      descripcion: descripcionFinal,
    };

    setHistorial((prevHistorial) => [...prevHistorial, nuevoAnuncio]);
    setProducto("");
    setMarca("");
    setEstado("");
    setCaracteristicas("");
  };

  useEffect(() => {
    localStorage.setItem("anuncio", JSON.stringify(historial));
  }, [historial]);

  const limpiarHistorial = () => {
    if (window.confirm("¿Seguro que quieres borrar todo el historial?")) {
      setHistorial([]);
    }
  };

  const limpiarAnuncio = (idAnuncio) => {
    const resultado = historial.filter((anuncio) => anuncio.id !== idAnuncio);
    setHistorial(resultado);
  };

  const usarAnuncio = (anuncio) => {
    setTituloGenerado(anuncio.titulo);
    setDescripcionGenerada(anuncio.descripcion);
  };

  return (
    <div className="flex min-h-screen items-center justify-center flex-col bg-slate-100 p-6">
      <ProductForm
        producto={producto}
        setProducto={setProducto}
        marca={marca}
        setMarca={setMarca}
        estado={estado}
        setEstado={setEstado}
        caracteristicas={caracteristicas}
        setCaracteristicas={setCaracteristicas}
        generarAnuncio={generarAnuncio}
        error={error}
      />

      {tituloGenerado !== "" && (
        <ResultCard
          tituloGenerado={tituloGenerado}
          descripcionGenerada={descripcionGenerada}
        />
      )}

      {historial.length > 0 && (
        <HistoryList
          historial={historial}
          limpiarHistorial={limpiarHistorial}
          limpiarAnuncio={limpiarAnuncio}
          usarAnuncio={usarAnuncio}
        />
      )}
    </div>
  );
}

export default App;
