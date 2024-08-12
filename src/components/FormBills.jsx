import { useForm } from "react-hook-form";
import Button from "./ui/Button";
import ClientSearchInput from "./ui/ClientSearchInput";
import DateInput from "./ui/DateInput";
import TextInput from "./ui/TextInput";
import { useState } from "react";

const FormBills = () => {
  
  const [total, setTotal] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

        // Convierte los valores a números
        const precio = parseFloat(data.precio) || 0;
        const valorDescuento = parseFloat(data.valorDescuento) || 0;
        const iva = parseFloat(data.iva) || 0;
    
        // Calculamos el total
        const descuento = precio * (valorDescuento / 100);
        const subtotal = precio - descuento;
        const totalConIva = subtotal + (subtotal * (iva / 100));
    
        // Seteamos el estado de la variable
        setTotal(totalConIva);

        //Guardamos los valores en la base de datos
        try {
          const response = await fetch('http://localhost:3000/facturas', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            //Enviamos el body con los datos numéricos modificados
            body: JSON.stringify({
              idCliente: data.idCliente,
              fecha: data.fecha,
              nombreProducto: data.nombreProducto, 
              precio, 
              valorDescuento, 
              iva, 
              total
            }),
          });
    
          if (!response.ok) {
            throw new Error('La respuesta no fue exitosa');
          }
          const result = await response.json();
          console.log('Success:', result);
        } catch (error) {
          console.error('Error:', error);
        }

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-lg">
      <div className="md:flex gap-7 max-w-2xl">
        <ClientSearchInput
          name="idCliente"
          register={register}
        />
        <DateInput {...register("fecha", { required: true })} />
        {errors.fecha && <span>La fecha es requerida</span>}
      </div>
      <div className="md:flex gap-7 max-w-screen-md">
        <TextInput
          label={"Nombre del Producto"}
          placeholder={"Escriba el nombre del producto"}
          {...register("nombreProducto", { required: true })}
        />
        {errors.nombreProducto && <span>El producto es requerido</span>}
        <TextInput
          label={"Precio"}
          placeholder={"Escriba el precio"}
          type={"number"}
          {...register("precio", { required: true })}
        />
      </div>
      <div className="md:flex gap-7 max-w-md">
        <TextInput
          label={"Valor de Descuento"}
          placeholder={"Porcentaje"}
          type={"number"}
          {...register("valorDescuento")}
        />
        <TextInput
          label={"Iva"}
          placeholder={""}
          value={19}
          type={"number"}
          {...register("iva", { required: true })}
        />
      </div>
      <div className="flex justify-between my-8">
        <span className="font-bold">Valor total de la factura: ${total}</span>
        <Button name={"Guardar Factura"} />
      </div>
    </form>
  );
};

export default FormBills;
