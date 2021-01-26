import { TCmsResponse, TCategory, TTag } from '@/types'

type BaseArticle = {
  title: string
  mainImage?: {
    url: string
  }
  bodyArray: TArticleBody[]
  category: TCategory
  tags?: TTag[]
  contents: string
  description: string
}

export type TArticleBody = {
  id: string
  body: string
}

export type TArticle = TCmsResponse & BaseArticle
