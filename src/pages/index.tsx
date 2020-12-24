import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { ArticleList } from '@/components/home/organisms'
import { TApi, TArticle } from '@/types'
import { apiKey } from '@/utils/common'

type Props = {
  articles: TArticle[]
}

const Home = ({ articles }: Props): JSX.Element => (
  <div>
    <Head>
      <title>Blog</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <ArticleList articles={articles} />
  </div>
)

export const getStaticProps: GetStaticProps = async () => {
  const data: TApi<TArticle> = await fetch(`${process.env.API_PATH}/blog`, apiKey as RequestInit)
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      articles: data.contents,
    },
  }
}

export default Home
