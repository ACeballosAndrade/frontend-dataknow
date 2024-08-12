const CardBills = ({nombreProducto, fecha, precio, valorDescuento, idCliente, nombre}) => {

   return (
    <div className="bg-white max-w-5xl mx-auto mt-10 px-16 border rounded-md border-gray-300">
      <div className="mt-9">
        <h1 className="font-bold text-xl">Todas las Facturas</h1>
        <div>
            <span>{`Nombre del Cliente: ${nombre}`}</span>
            <br />
            <span>{`ID del cliente: ${idCliente}`}</span>
            <br />
            <span>{`Fecha de compra: ${fecha}`}</span>
            <br />
            <span>{`Producto comprado: ${nombreProducto}`}</span>
            <br />
            <span>{`Precio: ${precio}`}</span>
            <br />
            <span>{`Descuento efectuado: ${valorDescuento}`}</span>
            <span></span>
        </div>
      </div>
    </div>
  )
}

export default CardBills