import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ArticleList } from '@/components/home/organisms'
import { TApi, TArticle, TBreadcrumb } from '@/types'
import { apiKey, LIMIT_ARTICLES } from '@/utils/common'
import { NextHead, TheBreadcrumb, Pagination } from '@/components/common/utils/organisms'
import { Box } from '@chakra-ui/react'
import { IconHome } from '@/utils/icons'
import { getPageCount, PER_PAGE } from '@/utils/pagination'

type Props = {
  articles: TArticle[]
  totalCount: number
}

const Pages = ({ articles, totalCount }: Props): JSX.Element => {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const data: TApi<TArticle> = await fetch(
    `${process.env.API_PATH}/blog?limit=${LIMIT_ARTICLES}`,
    apiKey as RequestInit
  )
    .then((res) => res.json())
    .catch(() => null)
  const pageCount: number[] = getPageCount(data.totalCount)

  const paths = pageCount.map((id) => `/page/${id}`)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = Number(context.params?.id) || 1

  const data: TApi<TArticle> = await fetch(
    `${process.env.API_PATH}/blog?offset=${(id - 1) * PER_PAGE}&limit=${PER_PAGE}&orders=-publishedAt`,
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

export default Pages
