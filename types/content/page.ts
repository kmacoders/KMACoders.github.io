import { IContentDocument } from '@nuxt/content/types/content'

export interface IToc {
  id: string;
  depth: number;
  text: string;
}

export interface IContent extends IContentDocument {
  body: Object;
  category: string;
  description: string;
  position: number;
  title: string;
  toc: IToc[];
  image: string;
  tags: string[];
  published: string;
  author: string;
  /**
   *  body content of a Markdown file before it is transformed into AST JSON,
   *  you can use it at this point but it is not returned by the API.
   */
  contentBeforeJson: string;
}
