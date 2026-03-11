function ProductForm({
  producto,
  setProducto,
  marca,
  setMarca,
  estado,
  setEstado,
  caracteristicas,
  setCaracteristicas,
  generarAnuncio,
  error,
}) {
  const formularioValido =
    producto.trim() !== "" && marca.trim() !== "" && estado.trim() !== "";
  return (
    <>
      <div className="flex items-center justify-center flex-col bg-slate-100 p-6">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h1 className="text-3xl font-bold mb-2 text-slate-800">CopySell</h1>
          <p className="text-sm mb-3 text-slate-500">
            Genera anuncios rápidos para tus productos.
          </p>
          <label
            htmlFor="producto"
            className="text-sm font-medium text-slate-700"
          >
            Producto
          </label>
          <input
            type="text"
            id="producto"
            placeholder="Introduce el producto..."
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-4 py-2"
          />
          <label htmlFor="marca" className="text-sm font-medium text-slate-700">
            Marca
          </label>
          <input
            type="text"
            id="marca"
            placeholder="Introduce la marca..."
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-4 py-2"
          />
          <label
            htmlFor="estado"
            className="text-sm font-medium text-slate-700"
          >
            Estado
          </label>
          <input
            type="text"
            id="estado"
            placeholder="Introduce el estado..."
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-4 py-2"
          />
          <label
            htmlFor="caracteristicas"
            className="text-sm font-medium text-slate-700"
          >
            Características
          </label>
          <textarea
            name="caracteristicas"
            id="caracteristicas"
            placeholder="Introduce las características del producto..."
            value={caracteristicas}
            onChange={(e) => setCaracteristicas(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-4 py-2 min-h-28"
          ></textarea>

          <button
            disabled={!formularioValido}
            onClick={generarAnuncio}
            className={`w-full rounded-lg px-4 py-2 font-medium  ${!formularioValido ? "bg-gray-600 text-white cursor-not-allowed" : " bg-slate-900 text-white hover:bg-slate-700 cursor-pointer"}`}
          >
            Generar anuncio
          </button>

          {error !== "" && (
            <p className="text-red-600 text-sm font-medium">{error}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductForm;
