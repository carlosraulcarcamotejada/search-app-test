import { FC, JSX } from "react";
import { TextFieldVatiants } from "..";

interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  variant: TextFieldVatiants
}

const Input: FC<InputProps> = ({ onChange, value, variant }): JSX.Element => {

  const WithoutAutoComplete: boolean = variant === "without-autocomplete";

  const WithAutoComplete: boolean = variant === "with-autocomplete";
  
  return (
    <input
      value={value}
      onChange={onChange}
      type="search"
      className={`
                ${WithAutoComplete ? "border" : ""}
                ${WithAutoComplete ? "rounded-md" : ""}


                ${WithoutAutoComplete ? "border" : ""}
                ${WithoutAutoComplete ? "border-r-0" : ""}
                ${WithoutAutoComplete ? "rounded-l-md" : ""}

                bg-stone-800
                
                
                h-12 
                px-4
               
                outline-none
                text-white
                `}
    />
  );
};

export { Input };
