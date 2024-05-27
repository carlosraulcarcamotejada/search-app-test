import { ContentPageResponse } from ".";


interface PageResponse {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  //Content !Display all the Content Of The Page
  content: ContentPageResponse[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  name: string;
  isActive: boolean;
  path: string;
  label: string;
  layout: "grid" | "flex";
  hasForm: boolean;
}

export type { PageResponse };
