import { TCategory, TArticle } from '@/types'

type Props = {
  categories: TCategory[]
  articles: TArticle[]
}

export const useCategories = ({ categories, articles }: Props): { categoriesArray: TCategory[] } => {
  const categoriesArray = categories
  for (let i = 0; i < categoriesArray.length; i += 1) {
    const categoryArticle = articles.filter((article) => article.category.id === categoriesArray[i].id)
    categoriesArray[i].count = categoryArticle.length
  }
  return { categoriesArray }
}
