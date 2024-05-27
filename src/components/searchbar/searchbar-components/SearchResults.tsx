import { FC, JSX } from "react";
import { PageResponse } from "./interfaces";

interface Item {
  item: ItemClass;
  refIndex: number;
  matches: Match[];
  score: number;
}

interface ItemClass {
  title: string;
  description: string;
  date: Date;
  tags: string[];
  href: string;
}

interface Match {
  indices: Array<[number, number]>;
  value: string;
  key: string;
  refIndex?: number;
}

interface SearchResultsProps {
  items: PageResponse[];
}

const SearchResults: FC<SearchResultsProps> = ({ items }): JSX.Element => {
  return items.length > 0 ? (
    <div className="rounded-md border">
      {items.map((item) => (
        <div
          className="p-2 text-white border-b last:border-0 hover:underline cursor-pointer"
          key={item.id}
        >
          {item.attributes.name}
        </div>
      ))}
    </div>
  ) : (
    <i className="text-white">No Results...</i>
  );
};

export type { Item };
export type { ItemClass };
export { SearchResults };
