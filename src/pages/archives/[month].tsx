import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { ArticleList } from '@/components/home/organisms'
import { TApi, TArticle } from '@/types'
import { apiKey, dateToYYYYMM } from '@/utils/common'

type Props = {
  articles: TArticle[]
}

const Archives = ({ articles }: Props): JSX.Element => (
  <div>
    <Head>
      <title>
        {`アーカイブ: ${dateToYYYYMM(articles[0].publishedAt, 'YYYY年MM月')} | Sorellina Coda Official Blog`}
      </title>
    </Head>

    <ArticleList articles={articles} />
  </div>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const data: TApi<TArticle> = await fetch(`${process.env.API_PATH}/blog`, apiKey as RequestInit)
    .then((res) => res.json())
    .catch(() => null)
  // 各記事の配信月を抽出した配列を作る
  const articleMonths = data.contents.map((content) => dateToYYYYMM(content.publishedAt, 'YYYY-MM'))
  // 配信月の配列から重複している月を削除
  const months: string[] = articleMonths.filter((month, i, self) => self.indexOf(month) === i)
  const paths = months?.map((month) => `/archives/${month}`)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const month = context.params?.month || ''
  const data: TArticle = await fetch(
    `${process.env.API_PATH}/blog?filters=publishedAt[begins_with]${month}&orders=-publishedAt`,
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

export default Archives
