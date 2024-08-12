import { forwardRef } from "react";



const SelectInput = forwardRef(({ label, options, placeholder, ...props }, ref) => {
  return (
    <div className="relative my-4">
      <label className="absolute -top-3 left-2 text-gray-500 px-1 text-xs bg-white">
        {label}
      </label>
      <select
        ref={ref}
        {...props}
        className="min-h-14 w-full min-w-60 text-black px-3 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-primary-300"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
});

SelectInput.displayName = 'SelectInput'

export default SelectInput;
