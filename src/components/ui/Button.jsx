import { forwardRef } from "react";

const Button = forwardRef(({ name, ...props }, ref) => {
  return (
    <button
    type="submit"
      ref={ref}
      className="bg-primary-200 text-sm px-5 py-2 rounded-3xl"
      {...props}
    >
      {name}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
