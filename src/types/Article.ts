import { TCmsResponse, TCategory, TTag } from '@/types'

type BaseArticle = {
  title: string
  mainImage?: {
    url: string
  }
  body: string
  category: TCategory
  tags?: TTag[]
}

export type TArticle = TCmsResponse & BaseArticle
