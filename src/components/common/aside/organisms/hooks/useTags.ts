import { TTag, TArticle } from '@/types'

type Props = {
  tags: TTag[]
  articles: TArticle[]
}

export const useTags = ({ tags, articles }: Props): { tagsArray: TTag[] } => {
  const tagsArray = tags
  for (let i = 0; i < tagsArray.length; i += 1) {
    const tagArticle = articles.filter((article) => {
      if (!article?.tags) {
        return false
      }
      const includeTags = article.tags?.filter((tag) => tag.id === tagsArray[i].id)
      return includeTags.length > 0
    })
    tagsArray[i].count = tagArticle.length
  }
  return { tagsArray }
}
