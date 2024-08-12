import { forwardRef } from "react";


const TextInput = forwardRef(({ label, placeholder, type, ...props }, ref) => {
  return (
    <div className="relative my-4">
      <label className="absolute -top-3 left-2 text-gray-500 px-1 text-xs bg-white">
        {label}
      </label>
      <input
        ref={ref}
        type={type??"text"}
        placeholder={placeholder}
        className="min-h-14 w-full text-black px-3 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-primary-300"
        {...props} //Permite incluir cualquier otro prop
      />
    </div>
  ); 
});

TextInput.displayName = 'TextInput'

export default TextInput;