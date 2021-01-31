import React from 'react'
import { GetStaticProps } from 'next'
import { ArticleList } from '@/components/home/organisms'
import { TApi, TArticle, TBreadcrumb } from '@/types'
import { apiKey, LIMIT_ARTICLES } from '@/utils/common'
import { NextHead, TheBreadcrumb } from '@/components/common/utils/organisms'
import { Box } from '@chakra-ui/react'
import { IconHome } from '@/utils/icons'

type Props = {
  articles: TArticle[]
}

const Home = ({ articles }: Props): JSX.Element => {
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
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data: TApi<TArticle> = await fetch(
    `${process.env.API_PATH}/blog?limit=${LIMIT_ARTICLES}&orders=-publishedAt`,
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

export default Home
