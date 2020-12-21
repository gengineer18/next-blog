import React from 'react'
import { TApi, TArticle } from '@/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import { apiKey } from '@/utils/common'
import { TheArticle } from '@/components/article/organisms'

type Props = {
  article: TArticle
}

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

const Article = ({ article }: Props): JSX.Element => <TheArticle article={article} />

export default Article
