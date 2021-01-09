import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { ArticleList } from '@/components/home/organisms'
import { TApi, TArticle, TCategory } from '@/types'
import { apiKey } from '@/utils/common'

type Props = {
  articles: TArticle[]
}

const Categories = ({ articles }: Props): JSX.Element => (
  <div>
    <Head>
      <title>{`カテゴリー: ${articles[0] && articles[0].category.name} | Sorellina Coda Official Blog`}</title>
    </Head>

    <ArticleList articles={articles} />
  </div>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const data: TApi<TCategory> = await fetch(`${process.env.API_PATH}/categories`, apiKey as RequestInit)
    .then((res) => res.json())
    .catch(() => null)
  const paths = data.contents.map((content) => `/categories/${content.id}`)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id || ''
  const data: TArticle = await fetch(
    `${process.env.API_PATH}/blog?filters=category[equals]${id}&orders=-publishedAt`,
    apiKey as RequestInit
  )
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      articles: data.contents,
    },
  }
}

export default Categories
