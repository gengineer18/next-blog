/* eslint-disable react/no-danger */
import React from 'react'
import { TApi } from '@/types/Api'
import { TArticle } from '@/types/Article'
import { GetStaticPaths, GetStaticProps } from 'next'
import { apiKey } from '@/utils/common'

type Props = {
  article: TArticle
}

const ArticleSlug = ({ article }: Props): JSX.Element => (
  <article>
    <h1>{article.title}</h1>
    <p>{article.publishedAt}</p>
    <div dangerouslySetInnerHTML={{ __html: `${article.body}` }} />
  </article>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const data: TApi<TArticle> = await fetch(process.env.API_PATH as string, apiKey as RequestInit)
    .then((res) => res.json())
    .catch(() => null)
  const paths = data.contents.map((content) => `/articles/${content.id}`)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id || ''
  const data: TArticle = await fetch(`${process.env.API_PATH as string}/${id}`, apiKey as RequestInit)
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      article: data,
    },
  }
}

export default ArticleSlug
