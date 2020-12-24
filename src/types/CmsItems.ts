import { TArticle, TCategory, TTag } from '@/types'

export type TCmsItems = {
  cmsItems: {
    latestArticles: TArticle[]
    categories: TCategory[]
    tags: TTag[]
  }
}
