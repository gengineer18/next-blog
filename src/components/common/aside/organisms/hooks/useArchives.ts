import { TArticle } from '@/types'
import { dateToYYYYMM } from '@/utils/common'

type Props = {
  articles: TArticle[]
}

export const useArchives = ({ articles }: Props): { articlesArray: typeof articlesArray } => {
  const DATE_FORMAT = 'YYYY-MM'
  const VIEW_DATE_FORMAT = 'YYYY年MM月'
  const articleMonths = articles.map((article) => dateToYYYYMM(article.publishedAt, DATE_FORMAT))
  const months: string[] = articleMonths.filter((month, i, self) => self.indexOf(month) === i)
  const articlesArray: (TArticle & {
    count?: number
    publishedMonth?: string
    viewPublishedMonth?: string
  })[] = articles
  for (let i = 0; i < months.length; i += 1) {
    const archivedArticles = articles.filter((article) => dateToYYYYMM(article.publishedAt, DATE_FORMAT) === months[i])
    articlesArray[i].count = archivedArticles.length
    articlesArray[i].publishedMonth = dateToYYYYMM(articlesArray[i].publishedAt, DATE_FORMAT)
    articlesArray[i].viewPublishedMonth = dateToYYYYMM(articlesArray[i].publishedAt, VIEW_DATE_FORMAT)
  }
  return { articlesArray }
}
