import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { FC, JSX } from "react";

interface ButtonProps {
  onClick?: () => Promise<any>;
  type?: "button" | "submit";
}

const Button: FC<ButtonProps> = ({ onClick, type = "button" }): JSX.Element => {
  return (
    <button
      onClick={() => {
        typeof onClick === "function" && onClick();
      }}
      type={type}
      className="
                bg-black
                border 
                duration-150 
                grid 
                group
                h-12
                place-content-center 
                ransition-all
                rounded-r-md 
                w-12 

                hover:bg-slate-800
                active:bg-slate-900 
                "
    >
      <MagnifyingGlassIcon
        className="
                  duration-150 
                  h-7 
                  text-gray-400
                  transition-all 
                  w-7

                  group-active:text-gray-600
                  group-hover:text-gray-500 
                  "
      />
    </button>
  );
};

export { Button };
