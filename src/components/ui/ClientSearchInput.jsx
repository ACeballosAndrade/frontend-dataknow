import { useState, forwardRef } from "react";

const ClientSearchInput = forwardRef(({register, name}, ref) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Esta función simula una llamada a una API
  const fetchClients = async (searchQuery) => {
    // Fect a la base de datos
     const response = await fetch(`http://localhost:3000/clients?id=${searchQuery}`);
     const data = await response.json();
    
    setResults(data);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 1) {
      fetchClients(value);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative w-full my-4 min-w-sm">
      <label className="absolute -top-3 left-2 bg-white text-gray-500 px-1 text-sm">
        Cliente
      </label>
      <div className="flex items-center min-h-14 w-full text-black px-3 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-primary-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Documento del cliente"
        className={`w-full px-2 py-1 focus:outline-none text-gray-700`}
        {...register(name, {
          onChange: handleChange,
          ref,
        })}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {results.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 rounded mt-1 w-full max-h-60 overflow-y-auto z-10">
          {results.map((client) => (
            <li
              key={client.id}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setQuery(client.name);
                setResults([]);
              }}
            >
              {client.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

ClientSearchInput.displayName = 'ClientSearchInput'

export default ClientSearchInput;
