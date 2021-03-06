import React from 'react'
import { GetStaticProps } from 'next'
import { ArticleList } from '@/components/home/organisms'
import { TApi, TArticle, TBreadcrumb } from '@/types'
import { apiKey } from '@/utils/common'
import { PER_PAGE } from '@/utils/pagination'
import { NextHead, TheBreadcrumb, Pagination } from '@/components/common/utils/organisms'
import { Box } from '@chakra-ui/react'
import { IconHome } from '@/utils/icons'

type Props = {
  articles: TArticle[]
  totalCount: number
}

const Home = ({ articles, totalCount }: Props): JSX.Element => {
  const breadcrumbs: TBreadcrumb[] = [
    {
      name: 'ホーム',
      path: '/',
      icon: IconHome,
    },
  ]
  return (
    <>
      <NextHead />
      <Box my={4}>
        <TheBreadcrumb breadcrumbs={breadcrumbs} />
      </Box>
      <ArticleList articles={articles} />
      <Box my={4}>
        <Pagination totalCount={totalCount} />
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data: TApi<TArticle> = await fetch(
    `${process.env.API_PATH}/blog?offset=0&limit=${PER_PAGE}&orders=-publishedAt`,
    apiKey as RequestInit
  )
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      articles: data.contents,
      totalCount: data.totalCount,
    },
  }
}

export default Home
