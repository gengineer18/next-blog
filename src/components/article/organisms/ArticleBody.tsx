/* eslint-disable react/no-danger */
import { TArticle } from '@/types'
import React from 'react'

type Props = {
  article: TArticle
}

export const ArticleBody = ({ article }: Props): JSX.Element => (
  <article>
    <h1>{article.title}</h1>
    <p>{article.publishedAt}</p>
    <p>{article.category.name}</p>
    {article.tag?.map((tag) => (
      <p>{tag.name}</p>
    ))}
    <div dangerouslySetInnerHTML={{ __html: `${article.body}` }} />
  </article>
)
