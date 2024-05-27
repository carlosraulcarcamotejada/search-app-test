import {
  AccordionIconDirection,
  AccordionIconType,
  AccordionSize,
  BottomPosition,
  Breadcrumb,
  ButtonIconDirection,
  ButtonSize,
  ButtonType,
  ButtonVariant,
  GridCols,
  HeadingTextFontWeight,
  HeadingTextJustify,
  HeadingTextTextColor,
  Height,
  ImageCarrouselSlides,
  LeftPosition,
  LinkJustifyText,
  LinkTextColor,
  LinkTextSize,
  PosterPageCover,
  RichParagraphResponse,
  RightPosition,
  RowEnd,
  RowSpan,
  RowStart,
  SecondaryTextFontWeight,
  SecondaryTextJustify,
  SecondaryTextTextColor,
  TertiaryTextFontWeight,
  TertiaryTextJustify,
  TertiaryTextTextColor,
  TopPosition,
  Width,
  componentsName,
} from ".";
import { ValidationJSON } from "../../../../helpers";

type ButtonIconSizeRes = "s16" | "s24" | "s34" | "auto";

interface ContentPageResponse {
  id: number;
  __component: componentsName;
  title: string;
  imageSrc: ImageSrc;
  Margins: Margins;
  welcomeMessage: string;
  imageLogo: ImageLogo;
  ImageCarrousel?: ImageCarrousel;
  ImageCarrouselTimeBetweenSlides?: number;
  GridCols?: GridCols;
  Icon?: Icon;
  ImageMedia?: Image;
  Size?: Size;
  Flex?: Flex;
  IsActive?: IsActive;
  BreadcrumbsOnlyHomeIcon?: boolean;
  BreadcrumbsIconSeparator?: "slash" | "arrow";
  BreadcrumbsItems?: Breadcrumb[];
  ImageHeight: Height;
  ImageWidth: Width;
  MdImageHeight: Height;
  MdImageWidth: Width;
  LgImageHeight: Height;
  LgImageWidth: Width;
  mapTitle?: string;
  MapPlaces?: MapPlace[];
  MapFullColor?: boolean;
  MapFullWidth?: boolean;
  city?: string;
  direction?: Direction[];
  roomVideosLinks: Video[];
  roomVideosImg: PosterImg;
  RoomVideosTitle?: string;
  RoomVideosFullWidth?: boolean;
  LatestNewsRoomCount: number;
  DirectionDivider?: "horizontal" | "vertical";
  richParagraph: RichParagraphResponse[];
  RichParagraphEnum: number;
  RichParagraphTextSize: "m";
  IconSize?: Size;
  IconColor?: "red" | "gray";
  CardDescriptionTitle?: string;
  CardMainTitle?: string;
  CardButtonIcon?: Icon;
  CardPricing?: string;
  CardSize?: "s-3" | "s-6" | "s-12";
  CardActionLabel?: string;
  CardActionPath?: string;
  CardHeaderImage?: CardHeaderImage;
  paragraphTextBgColor?: "red" | "normal";
  paragraphTextFullHeight?: boolean;
  paragraphTextJustify?: "center" | "start" | "end";
  paragraphTextShowActive?: boolean;
  paragraphTextText?: string;
  paragraphTextColor?: "gray" | "white";
  paragraphTextLineClamp?: string;
  paragraphTextFontWeight?: "bold" | "light" | "regular" | "medium";
  ParagraphTextModalMedia?: "img" | "youtube-video";
  ParagraphTextImgModal?: ParagraphTextImgModal;
  ParagraphTextFile?: ParagraphTextFile;
  ParagraphTextMultilineText?: ParagraphTextMultilineText[];
  GridRows?: GridRows;
  CustomComponentName?:
    | "PensionSection"
    | "CheckStateAccount"
    | "NewsSection"
    | "QuestionResources";
  id_element?: string;
  ScrollButtonPosition?: Position;
  ButtonPosition?: Position;
  PosterPageCover: PosterPageCover;
  PosterPageTextAlign: "start" | "center" | "end";
  TextFieldId?: string;
  TextFieldLabel?: string;
  TextFieldPlaceholder?: string;
  TextFieldRequired?: boolean;
  TextFieldVariant?: "text" | "number" | "text-area";
  RadioButtonId?: string;
  RadioButtonLabel?: string;
  RadioButtonName?: string;
  RadioButtonValue?: string;
  DropdownId?: string;
  DropdownLabel?: string;
  DropdownRequired?: boolean;
  DropdownData?: DropdownDatum[];
  //type button , To Fix some types
  VJSONFormValidationJSON: ValidationJSON;
  DVFormFormDefaultValues: unknown;
  PosterPageImageSrc: Image;
  PosterPageTitle: string;
  HeadingTextFontWeight?: HeadingTextFontWeight;
  HeadingTextJustify?: HeadingTextJustify;
  HeadingTextText: string;
  HeadingTextPath?: string;
  HeadingTextTextColor?: HeadingTextTextColor;
  SecondaryTextFontWeight?: SecondaryTextFontWeight;
  SecondaryTextJustify?: SecondaryTextJustify;
  SecondaryTextText: string;
  SecondaryTextPath?: string;
  SecondaryTextTextColor?: SecondaryTextTextColor;
  TertiaryTextText: string;
  TertiaryTextTextColor?: TertiaryTextTextColor;
  TertiaryTextJustify?: TertiaryTextJustify;
  TertiaryTextFontWeight?: TertiaryTextFontWeight;
  ButtonLabel?: string;
  ButtonPath?: string;
  ButtonDisplayedRoute?: string;
  ButtonVariant?: ButtonVariant;
  ButtonType?: ButtonType;
  ButtonSize?: ButtonSize;
  MdButtonSize?: ButtonSize;
  LgButtonSize?: ButtonSize;
  ButtonIconSize?: ButtonIconSizeRes;
  ButtonFullWidth?: boolean;
  ButtonIconDirection?: ButtonIconDirection;
  ButtonFile?: ButtonFile;
  ButtonIcon?: Icon;
  ButtonImgModal?: ButtonImgModal;
  ButtonIsYouTubeVideo?: boolean;
  EmptyStateTitle?: string;
  EmptyStateIcon?: Icon;
  EmptyStateDescription?: string;
  EmptyStateActionLink?: string;
  EmptyStateActionType?: "img" | "link";
  EmptyStateActionLabel?: string;

  ImageCarrouselSlides?: ImageCarrouselSlides[];

  DownloadSectionTitle: string;
  DownloadSectionldSection?: string;
  DownloadSSection?: DownloadSSection[];

  TabsBenefitsListTitles: TabsBenefitsListTitle[];
  TabsBenefitsBenefits: TabsBenefitsBenefit[];

  BenefitLabel?: string;
  BenefitDescription?: RichParagraphResponse[];
  BenefitAloneIcon?: Icon;

  ParagraphTextSize?: "l";

  CardInfoImageSrc: CardInfoImageSrc;
  CardInfoTitle: string;
  CardInfoFileUrl: CardInfoFileURL;
  CardInfoFullWidth?: boolean;
  CardInfoHasFile?: boolean;
  CardInfoMdFullWidth?: boolean;
  CardInfoLgFullWidth?: boolean;
  CardInfoPath?: string;

  PageLinkText: string;
  PageLinkIcon: Icon;
  PageLinkPath?: string;

  QAQuestion: string;
  QAAnswers: RichParagraphResponse[];
  QATextSize: "m";

  AccordionIcon?: AccordionIconType;
  AccordionDepthLevel?: number;
  AccordionIconDirection?: AccordionIconDirection;
  AccordionShowDivider?: boolean;
  AccordionSize?: AccordionSize;
  AccordionTitle: string;
  AccordionContentRichParagraph?: RichParagraphResponse[];
  AccordionContentType?: "rich-paragraph";

  LinkJustifyText?: LinkJustifyText;
  LinkTextColor?: LinkTextColor;
  linkTextSize?: LinkTextSize;
}


interface Data {
  id: number;
  attributes: DataAttributes;
}

export interface CardInfoFileURL {
  data: Data;
}

interface ParagraphTextFile {
  data: Data;
}

export interface Attributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: null;
  height: null;
  formats: null;
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

interface ParagraphTextImgModal {
  data: Data;
}

interface CardInfoImageSrc {
  data: Data;
}

interface TabsBenefitsBenefit {
  id: number;
  BenefitLabel: string;
  BenefitDescription: RichParagraphResponse[];
  BenefitIcon: string;
  BenefitTitleParent: string;
}

interface TabsBenefitsListTitle {
  id: number;
  StringField: string;
}

interface ButtonImgModal {
  data: Data;
}

interface ButtonFile {
  data: Data;
}

interface DownloadSSection {
  id: number;
  DownloadSSLabel: string;
  DownloadSSFile: DownloadSSFile;
}

interface DownloadSSFile {
  data: Data;
}

interface Position {
  id: number;
  Top: TopPosition;
  Right: RightPosition;
  Bottom: BottomPosition;
  Left: LeftPosition;
  MdTop: TopPosition;
  MdRight: RightPosition;
  MdBottom: BottomPosition;
  MdLeft: LeftPosition;
  LgTop: TopPosition;
  LgRight: RightPosition;
  LgBottom: BottomPosition;
  LgLeft: LeftPosition;
}

interface DropdownDatum {
  id: number;
  StringField: null | string;
}
interface ParagraphTextMultilineText {
  id: number;
  StringField: string;
}

interface Image {
  data: DAT;
}

interface Icon {
  id: number;
  icon: string;
}

interface ImageCarrousel {
  data: DAT[];
}

interface DAT {
  id: number;
  attributes: DataAttributes;
}

interface Data {
  id: number;
  attributes: DataAttributes;
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

interface CardHeaderImage {
  data: Data;
}

interface Video {
  id: number;
  StringField: string;
}

interface PosterImg {
  data: DAT;
}

interface Direction {
  id: number;
  StringField: string;
}

interface MapPlace {
  id: number;
  lat: number;
  lng: number;
  address: string;
  name: string;
  place: string;
}

interface ImageLogo {
  data: Data;
}

interface ImageSrc {
  data: Data;
}

interface GridRows {
  id: number;
  RowStart: RowStart;
  RowSpan: RowSpan;
  RowEnd: RowEnd;
  MdRowStart: RowStart;
  MdRowSpan: RowSpan;
  MdRowEnd: RowEnd;
  LgRowStart: RowStart;
  LgRowSpan: RowSpan;
  LgRowEnd: RowEnd;
}

interface Flex {
  id: number;
  FlexDirection: null;
  AlignItems: string;
  JustifyContent: null;
  Flex: boolean;
  MdFlex: null;
  MdFlexDirection: null;
  MdAlignItems: null;
  MdJustifyContent: null;
  LgFlex: null;
  LgFlexDirection: null;
  LgAlignItems: null;
  LgJustifyContent: null;
}

interface Margins {
  id: number;
  MarginTop: null | string;
  MarginBottom: null | string;
  MarginLeft: null | string;
  MarginRight: null | string;
  MdMarginTop: null | string;
  MdMarginBottom: null | string;
  MdMarginLeft: null | string;
  MdMarginRight: null | string;
  LgMarginTop: null | string;
  LgMarginBottom: null | string;
  LgMarginLeft: null | string;
  LgMarginRight: null | string;
}

interface Paddings {
  id: number;
  PaddingTop: null | string;
  PaddingBottom: null | string;
  PaddingLeft: null | string;
  PaddingRight: null | string;
  MdPaddingTop: null | string;
  MdPaddingBottom: null | string;
  MdPaddingLeft: null | string;
  MdPaddingRight: null | string;
  LgPaddingTop: null | string;
  LgPaddingBottom: null | string;
  LgPaddingLeft: null | string;
  LgPaddingRight: null | string;
}

interface BorderColors {
  id: number;
  BorderColor: null | string;
  MdBorderColor: null | string;
  LgBorderColor: null | string;
}

interface Borders {
  id: number;
  Border: null | string;
  MdBorder: null | string;
  LgBorder: null | string;
}

interface Size {
  id: number;
  Height: null | Height;
  Width: null | Width;
  MdHeight: null | Height;
  MdWidth: null | Width;
  LgHeight: null | Height;
  LgWidth: null | Width;
}

interface IsActive {
  id: number;
  isActive: boolean;
  MdIsActive: boolean;
  LgIsActive: boolean;
}


export type { Flex };
export type { Size };
export type { Position };
export type { IsActive };
export type { GridRows };
export type { Margins };
export type { Paddings };
export type { Borders };
export type { BorderColors };
export type { ContentPageResponse };
export type { ButtonIconSizeRes };
export type { TabsBenefitsBenefit };
