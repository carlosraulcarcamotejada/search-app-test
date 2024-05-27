interface RichParagraphResponse {
    type: RichParagraph2ResponseType;
    children: RichParagraph2ResponseChild[];
    level?: number;
    format?: string;
  }
  
  interface RichParagraph2ResponseChild {
    type: ChildType;
    text?: string;
    children?: ChildChild[];
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    url?: string;
  }
  
  interface ChildChild {
    type: ChildType;
    text: string;
    italic: boolean;
    bold?: boolean;
    url?: string;
  
    children?: ChildLink[];
  }
  
  interface ChildLink {
    text: string;
    type: "text";
  }
  
  enum ChildType {
    ListItem = "list-item",
    Text = "text",
    Link = "link",
  }
  
  enum RichParagraph2ResponseType {
    Heading = "heading",
    List = "list",
    Paragraph = "paragraph",
    Quote = "quote",
  }
  
  export type { RichParagraphResponse };
  