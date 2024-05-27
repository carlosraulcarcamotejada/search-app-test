import { FC, JSX } from "react";

const SearchFallback: FC = (): JSX.Element => {
  return (
    <div className="flex justify-center flex-col items-center pt-20">
      <div className="flex">
        <div
          className="
                    animate-pulse
                    bg-stone-800 
                    border 
                    border-r-0
                    h-12 
                    px-4
                    rounded-l-md
                    outline-none
                    w-52
                    "
        />
        <div
          className="
                    animate-pulse
                    border 
                    duration-150 
                    grid 
                    group
                    h-12
                    place-content-center 
                    ransition-all
                    rounded-r-md 
                    w-12 
                    "
        />
      </div>
    </div>
  );
};

export { SearchFallback };
