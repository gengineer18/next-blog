import { TCmsResponse, TCategory, TTag } from '@/types'

type BaseArticle = {
  title: string
  mainImage?: string
  body: string
  category: TCategory
  tag?: TTag[]
}

export type TArticle = TCmsResponse & BaseArticle
