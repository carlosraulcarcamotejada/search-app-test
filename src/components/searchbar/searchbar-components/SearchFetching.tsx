import { FC, JSX, useRef, useState } from "react";
// import { retrieveSearchResults } from "../../../helpers";
import { Button } from "./Button";
import { Input } from "./Input";
import { ItemClass, SearchResults } from "./SearchResults";
import useSWR, { SWRResponse } from "swr";
import { PageResponse } from "./interfaces";
import qs from "qs";
import { SearchProps } from "../SearchBar";
import Fuse, { FuseResult } from "fuse.js";

const SearchBarFetching: FC<SearchProps> = ({
  variant = "with-autocomplete",
  debounceTime = 500,
}): JSX.Element => {
  const WithoutAutoComplete: boolean = variant === "without-autocomplete";

  const WithAutoComplete: boolean = variant === "with-autocomplete";

  const [searchValue, setSearchValue] = useState<string>("");
  const [results, setResults] = useState<PageResponse[]>([]);

  const debounTimeInMS: number = debounceTime * 1000;

  const handleSubmit = () => {
    console.log(data);

    const fuse = new Fuse(data ?? [], {
      keys: [
        { name: "attributes.name", weight: 30 },
        { name: "attributes.content.PosterPageTitle", weight: 0.5 },
        { name: "attributes.content.SecondaryTextText", weight: 0.5 },
        { name: "attributes.content.HeadingTextText", weight: 0.5 },
        { name: "attributes.content.richParagraph.children.text", weight: 0.5 },
        {
          name: "attributes.content.richParagraph.children.children.text",
          weight: 1,
        },
        { name: "attributes.content.ButtonLabel", weight: 0.5 },
        { name: "attributes.content.CardInfoTitle", weight: 0.5 },
        { name: "attributes.content.AccordionTitle", weight: 0.5 },
        {
          name: "attributes.content.AccordionContentRichParagraph.children.text",
          weight: 1,
        },
      ],
      includeScore: true,
      shouldSort: true,
      includeMatches: true,
      minMatchCharLength: 3,
      threshold: 0.3,
    });

    const resultsFuse: FuseResult<PageResponse>[] =
      fuse.search(searchValue, { limit: 10 }) ?? [];

   
    resultsFuse.sort((a, b) => {
        if (a?.score === undefined) return -1;
        if (b?.score === undefined) return 1;
        return a.score - b.score;
      });


    setResults(resultsFuse.map((item) => item.item));
  };



  const debounceRef = useRef<NodeJS.Timeout>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current && WithAutoComplete) {
      clearTimeout(debounceRef.current);
    }

    setSearchValue(e.target.value);

    if (WithAutoComplete) {
      debounceRef.current = setTimeout(() => {
        // const resultsFuse: ItemClass[] =
        //   (await retrieveSearchResults(e.target.value)) ?? [];
        // setResults(resultsFuse);
      }, debounTimeInMS);
    }
  };

  const queryPage: string = qs.stringify(
    {
      populate: {
        content: {
          populate: [
            "BenefitAloneIcon",
            "BreadcrumbsItems",
            "ButtonFile",
            "ButtonIcon",
            "ButtonIconDirection",
            "ButtonImgModal",
            "ButtonPosition",
            "CardButtonIcon",
            "CardHeaderImage",
            "CardInfoFileUrl",
            "CardInfoImageSrc",
            "ChkSteAcco",
            "direction",
            "DownloadSSection.DownloadSSFile",
            "DropdownData",
            "EmptyStateIcon",
            "Icon",
            "ImageCarrousel",
            "ImageCarrouselSlides.ICSlideImage",
            "ImageMedia",
            "MapPlaces",
            "NewsSection",
            "PageLinkIcon",
            "ParagraphTextFile",
            "ParagraphTextImgModal",
            "PenSection",
            "PosterPageImageSrc",
            "RichParagraph",
            "roomVideosImg",
            "roomVideosLinks",
            "ScrollButtonPosition",
            "TabsBenefitsBenefits",
            "TabsBenefitsListTitles",
          ],
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const { data }: SWRResponse<PageResponse[]> = useSWR(`pages?${queryPage}`);

  return (
    <div className="flex justify-center flex-col items-center pt-20">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (WithoutAutoComplete) {
            handleSubmit();
          }
        }}
        className="flex"
      >
        <Input
          variant={variant}
          onChange={handleInputChange}
          value={searchValue}
        />

        {WithoutAutoComplete && <Button type="submit" />}
      </form>
      <div className="mt-10">
        <SearchResults items={results} />
      </div>
    </div>
  );
};

export { SearchBarFetching };
