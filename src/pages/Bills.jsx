import { useState } from 'react'
import FormBills from '../components/FormBills'
import CardBills from '../components/ui/CardBills'



const Bills = () => {

  const [bills, setBills] = useState([])

  const handleFetch = async () => {
  // Fect a la base de datos
   const response = await fetch(`http://localhost:3000/facturas`);
   const data = await response.json();
  
    setBills(data.facturas[0]);
    console.log(bills[0].nombre)

  }

  return (
    <div className="bg-white max-w-5xl mx-auto mt-10 px-16 border rounded-md border-gray-300">
      <div className="mt-9">
        <h1 className="font-bold text-xl">Facturas</h1>
        <div className="bg-primary-100 h-9 my-4 flex items-center max-w-3xl">
          <span className="text-sm pl-4">Rellena la siguiente información</span>
        </div>
        <FormBills/>
        <button
          onClick={handleFetch} 
          className="bg-primary-200 text-sm px-5 py-2 rounded-3xl mb-6">
          Ver todas las facturas
        </button>
      </div>
      {bills.length > 0 && bills.map((b, index) => (
        <CardBills
        key={index}
        nombreProducto={b.nombreProducto} 
        fecha={b.fecha} 
        precio={b.precio} 
        valorDescuento={b.valorDescuento} 
        idCliente={b.idCliente} 
        nombre={b.nombre}
        />
      ))}
    </div>
  )
}

export default Bills