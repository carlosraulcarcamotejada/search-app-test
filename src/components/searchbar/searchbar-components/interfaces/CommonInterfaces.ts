type LinkJustifyText = "start" | "center" | "end";
type LinkTextColor = "gray" | "red" | "white";
type LinkTextSize = "s" | "m" | "auto";
type FontWeight = "semibold" | "bold";

type AccordionSize = "s" | "m" | "auto";
type AccordionIconDirection = "left" | "right";
type AccordionIconType = "arrow" | "plus";

interface ImageCarrouselSlides {
  id: number;
  ICButtonLabel?: null | string;
  ICButtonPath?: null | string;
  ICButtonDirection?: null | "left" | "right";
  ICButtonVariant?: null | "primary" | "secondary";
  ICSlideHasButton?: null | boolean;
  // ICButtonIcon?: null | IconFigure;
  ICButtonIconDirection?: null | "left" | "right";
  ICSlideImage: MediaStrapi;
}

interface MediaStrapi {
  data: Data;
}

interface Data {
  id: number;
  attributes: DataAttributes;
}

interface DataAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

interface Formats {
  small: Small;
  thumbnail: Small;
}

interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "fab"
  | "quick-button"
  | "discreet-outlined"
  | "discreet-primary";

type ButtonIconSize = 16 | 24 | 34 | "auto";

type ButtonType = "button" | "reset" | "submit";

type ButtonSize = "s" | "m" | "l" | "auto";

type ButtonIconDirection = {
  IconDirection: "left" | "right";
};

interface Breadcrumb {
  id: number;
  BreadcumbItemPath: string;
  BreadcrumbItemLabel: string;
}

type PosterPageCoverPosition =
  | "bg-contain"
  | "bg-bottom"
  | "bg-center"
  | "bg-cover"
  | "bg-top";

interface PosterPageCover {
  BgCoverPoster: PosterPageCoverPosition;
  MdBgCoverPoster: PosterPageCoverPosition;
  LgBgCoverPoster: PosterPageCoverPosition;
}

interface PosterPageProps {
  imageSrc: string;
  title?: string;
  PosterPageTextAlign?: "start" | "center" | "end";
  PosterPageCover?: PosterPageCover;
}

type HeadingTextFontWeight = "light" | "regular" | "medium" | "bold";
type HeadingTextJustify = "start" | "center" | "end";
type HeadingTextTextColor = "gray" | "red";

interface HeadingTextProps {
  fontWeight?: HeadingTextFontWeight;
  justify?: HeadingTextJustify;
  text: string;
  textColor?: HeadingTextTextColor;
  path?: string;
}

type SecondaryTextFontWeight = "light" | "regular" | "medium" | "bold";
type SecondaryTextJustify = "start" | "center" | "end";
type SecondaryTextTextColor = "gray" | "red";

interface SecondaryTextProps {
  fontWeight?: SecondaryTextFontWeight;
  justify?: SecondaryTextJustify;
  text: string;
  textColor?: SecondaryTextTextColor;
  path?: string;
}

type TertiaryTextFontWeight = "light" | "regular" | "medium" | "bold";
type TertiaryTextJustify = "start" | "center" | "end";
type TertiaryTextTextColor = "gray" | "red";

interface TertiaryTextProps {
  fontWeight?: TertiaryTextFontWeight;
  justify?: TertiaryTextJustify;
  text: string;
  textColor?: TertiaryTextTextColor;
}

export type {
  TertiaryTextProps,
  TertiaryTextFontWeight,
  TertiaryTextJustify,
  TertiaryTextTextColor,
  PosterPageCoverPosition,
  SecondaryTextFontWeight,
  SecondaryTextJustify,
  SecondaryTextTextColor,
  SecondaryTextProps,
  HeadingTextFontWeight,
  HeadingTextJustify,
  HeadingTextTextColor,
  HeadingTextProps,
  PosterPageCover,
  PosterPageProps,
  Breadcrumb,
  ButtonIconDirection,
  ButtonIconSize,
  ButtonSize,
  ButtonVariant,
  ButtonType,
  MediaStrapi,
  ImageCarrouselSlides,
  LinkJustifyText,
  FontWeight,
  LinkTextColor,
  LinkTextSize,
  AccordionIconDirection,
  AccordionSize,
  AccordionIconType,
};
