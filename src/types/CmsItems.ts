import { TArticle, TCategory } from '@/types'

export type TCmsItems = {
  cmsItems: {
    latestArticles: TArticle[]
    categories: TCategory[]
  }
}
