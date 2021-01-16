import React from 'react'
import { NextHead } from '@/components/common/utils/organisms/NextHead'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ArticleList } from '@/components/home/organisms'
import { TApi, TArticle, TCategory } from '@/types'
import { apiKey } from '@/utils/common'

type Props = {
  articles: TArticle[]
  tagName: string
}

const Tags = ({ articles, tagName }: Props): JSX.Element => {
  const title = `タグ: ${tagName} | Sorellina Coda Official Blog`
  return (
    <>
      <NextHead title={title} />
      <ArticleList articles={articles} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: TApi<TCategory> = await fetch(`${process.env.API_PATH}/tags`, apiKey as RequestInit)
    .then((res) => res.json())
    .catch(() => null)
  const paths = data.contents.map((content) => `/tags/${content.id}`)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id || ''
  const data: TArticle = await fetch(
    `${process.env.API_PATH}/blog?filters=tags[contains]${id}&orders=-publishedAt`,
    apiKey as RequestInit
  )
    .then((res) => res.json())
    .catch(() => null)
  const tag = await fetch(`${process.env.API_PATH}/tags/${id}`, apiKey as RequestInit)
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      articles: data.contents,
      tagName: tag.name,
    },
  }
}

export default Tags
