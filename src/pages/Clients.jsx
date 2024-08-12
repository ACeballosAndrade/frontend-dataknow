
import FormClients from "../components/FormClients";

const Clients = () => {
  return (
    <div className="bg-white max-w-5xl mx-auto mt-10 px-16 border rounded-md border-gray-300">
      <div className="mt-9">
        <h1 className="font-bold text-xl">Clientes</h1>
        <div className="bg-primary-100 h-9 my-4 mb-8 flex items-center max-w-3xl">
          <span className="text-sm pl-4">Rellena la siguiente información</span>
        </div>
        <FormClients/>
      </div>
    </div>
  );
};

export default Clients;
