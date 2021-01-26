import React from 'react'
import { NextHead, TheBreadcrumb } from '@/components/common/utils/organisms'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ArticleList } from '@/components/home/organisms'
import { TApi, TArticle, TBreadcrumb } from '@/types'
import { apiKey, dateToYYYYMM } from '@/utils/common'
import { Box } from '@chakra-ui/react'
import { IconArchive, IconHome } from '@/utils/icons'

type Props = {
  articles: TArticle[]
}

const Archives = ({ articles }: Props): JSX.Element => {
  const month = dateToYYYYMM(articles[0].publishedAt, 'YYYY年MM月')
  const title = `アーカイブ: ${month} | Sorellina Coda Official Blog`
  const breadcrumbs: TBreadcrumb[] = [
    {
      name: 'ホーム',
      path: '/',
      icon: IconHome,
    },
    {
      name: month,
      path: '',
      icon: IconArchive,
    },
  ]
  return (
    <>
      <NextHead title={title} />
      <Box my={4}>
        <TheBreadcrumb breadcrumbs={breadcrumbs} />
      </Box>
      <ArticleList articles={articles} />
    </>
  )
}

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
