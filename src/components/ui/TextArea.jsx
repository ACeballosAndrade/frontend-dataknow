import { forwardRef } from "react"

const TextArea = forwardRef(({ label, placeholder, ...props}, ref) => {
  return (
    <div className="relative my-4">
      <label className="absolute -top-3 left-2 text-gray-500 px-1 text-xs bg-white">
        {label}
      </label>
      <textarea
        ref={ref}
        placeholder={placeholder}
        className="min-h-20 w-full text-black px-3 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-primary-300"
        {...props}
      />
    </div>
  )
})

TextArea.displayName = 'TextArea'

export default TextArea