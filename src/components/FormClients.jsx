
import { useForm } from "react-hook-form";
import SelectInput from "./ui/SelectInput";
import TextInput from "./ui/TextInput";
import TextArea from "./ui/TextArea";
import Button from "./ui/Button";

const FormClients = () => {

  const {register, handleSubmit, formState: {errors}} = useForm()

  const options = [
    { value: "Cédula", label: "Cédula" },
    { value: "Pasaporte", label: "Pasaporte" },
  ];

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
      <div className="md:max-w-xs">
        <TextInput
          label={"Nombre del Cliente"}
          placeholder={"Escriba el nombre del cliente"}
          {...register('nombre', {require: true})}
        />
        {errors.nombre && <span>El nombre es requerido</span>}
      </div>

      <div className="min-w-44 md:flex gap-5">
        <SelectInput
          label={"Tipo de identificación"}
          placeholder={"Seleccione"}
          options={options}
          {...register('tipoId', {required: true})}
        />
        {errors.tipoId && <span>El Tipo de id es requerido</span>}
        <TextInput
          label={"Número de identificación"}
          placeholder={"Número de identificación "}
          type={"number"}
          {...register('id', {required: true})}
        />
        {errors.id && <span>La identificación es requerida</span>}
      </div>
      <div>
        <TextArea
          label={"Observaciones"}
          placeholder={"Escriba observaciones"}
          {...register('observaciones', {required:true})}
        />
        {errors.observaciones && <span>Escribir observaciones</span>}
      </div>

      <div className="flex justify-end mb-5">
        <Button name={"Guardar Cliente"} />
      </div>
    </form>
  );
};

export default FormClients;
