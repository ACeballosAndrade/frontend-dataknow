import { forwardRef } from "react"



const DateInput = forwardRef(({...props}, ref) => {
  return (
    <div className="relative my-4 min-w-64">
      <label className="absolute -top-3 left-2 text-gray-500 px-1 text-xs bg-white">
        Fecha
      </label>
      <input
        ref={ref}
        type="date"
        placeholder={"Seleccione una fecha"}
        {...props}
        className="min-h-14 w-full text-black px-3 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-primary-300"
      />
    </div>
  )
})

DateInput.displayName = 'DateInput'

export default DateInput