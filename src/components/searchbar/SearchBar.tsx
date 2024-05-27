import { FC, JSX, Suspense } from "react";
import { SearchBarFetching } from "./searchbar-components";
import { ErrorBoundary } from "react-error-boundary";
import { SearchFallback } from "./searchbar-components/fallback-components";

type TextFieldVatiants = "without-autocomplete" | "with-autocomplete";

interface SearchProps {
  variant?: TextFieldVatiants;
  debounceTime?: number;
}

const SearchBar: FC<SearchProps> = (props): JSX.Element => {
  return (
    <ErrorBoundary FallbackComponent={SearchFallback}>
      <Suspense fallback={<SearchFallback />}>
        <SearchBarFetching {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};

export type { TextFieldVatiants };
export type { SearchProps };
export { SearchBar };
