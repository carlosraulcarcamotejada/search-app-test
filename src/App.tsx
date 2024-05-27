import { FC, JSX } from "react";
import { SearchBar } from "./components/searchbar";

const App: FC = (): JSX.Element => {
  return (
    <div className="bg-black min-h-screen">
      <SearchBar variant="without-autocomplete" debounceTime={1} />
    </div>
  );
};

export { App };
