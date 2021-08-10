import { IContentDocument } from '@nuxt/content/types/content'

export interface INavLink {
  category: string,
  contentDocuments: IContentDocument[]
}

export interface ILink {
  [key: string]: IContentDocument[]
}
