import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { ArticleList } from '@/components/home/organisms'
import { TApi, TArticle, TCategory } from '@/types'
import { apiKey } from '@/utils/common'

type Props = {
  articles: TArticle[]
}

const Tags = ({ articles }: Props): JSX.Element => (
  <div>
    <Head>
      <title>
        {`タグ: ${articles[0] && articles[0].tags && articles[0]?.tags[0].name} | Sorellina Coda Official Blog`}
      </title>
    </Head>

    <ArticleList articles={articles} />
  </div>
)

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
  return {
    props: {
      articles: data.contents,
    },
  }
}

export default Tags
