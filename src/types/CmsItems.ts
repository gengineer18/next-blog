import { TArticle, TCategory, TTag } from '@/types'

export type TCmsItems = {
  cmsItems: {
    articles: TArticle[]
    categories: TCategory[]
    tags: TTag[]
  }
}
