import React from 'react'
import { GetStaticProps } from 'next'
import { ArticleList } from '@/components/home/organisms'
import { TApi, TArticle } from '@/types'
import { apiKey } from '@/utils/common'

type Props = {
  articles: TArticle[]
}

const Home = ({ articles }: Props): JSX.Element => (
  <>
    <ArticleList articles={articles} />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const data: TApi<TArticle> = await fetch(`${process.env.API_PATH}/blog?orders=-publishedAt`, apiKey as RequestInit)
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      articles: data.contents,
    },
  }
}

export default Home
