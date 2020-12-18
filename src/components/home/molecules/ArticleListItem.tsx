import React from 'react'
import { TArticle } from '@/types'
import { ArticleTitle, ArticleDate, ArticleCategory } from '../atoms'

type Props = {
  article: TArticle
}

export const ArticleListItem = ({ article }: Props): JSX.Element => (
  <>
    <ArticleTitle title={article.title} />
    <ArticleDate date={article.publishedAt} />
    <ArticleCategory name={article.category.name} />
  </>
)
