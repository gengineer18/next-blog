import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextHead, TheBreadcrumb } from '@/components/common/utils/organisms'
import { ArticleList } from '@/components/home/organisms'
import { TApi, TArticle, TCategory, TBreadcrumb } from '@/types'
import { apiKey } from '@/utils/common'
import { Box } from '@chakra-ui/react'

type Props = {
  articles: TArticle[]
}

const Categories = ({ articles }: Props): JSX.Element => {
  const category = articles[0] && articles[0].category.name
  const title = `カテゴリー: ${category} | Sorellina Coda Official Blog`
  const breadcrumbs: TBreadcrumb[] = [
    {
      name: 'ホーム',
      path: '/',
    },
    {
      name: category,
      path: '',
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
