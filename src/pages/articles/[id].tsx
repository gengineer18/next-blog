import React from 'react'
import { NextHead, TheBreadcrumb } from '@/components/common/utils/organisms/'
import { TApi, TArticle } from '@/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import { apiKey } from '@/utils/common'
import { TheArticle } from '@/components/article/organisms'
import { ogUrl, ogTitle } from '@/utils/ogp'
import { Box } from '@chakra-ui/react'

type Props = {
  article: TArticle
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: TApi<TArticle> = await fetch(`${process.env.API_PATH}/blog`, apiKey as RequestInit)
    .then((res) => res.json())
    .catch(() => null)
  const paths = data.contents.map((content) => `/articles/${content.id}`)
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id || ''
  const draftKey = context.previewData?.draftKey
  const data: TArticle = await fetch(
    `${process.env.API_PATH}/blog/${id}${draftKey !== undefined ? `?draftKey=${draftKey}` : ''}`,
    apiKey as RequestInit
  )
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      article: data,
    },
  }
}

const Article = ({ article }: Props): JSX.Element => {
  if (!article) {
    return <></>
  }
  const title = `${article.title} | ${ogTitle}`
  const url = `${ogUrl}/articles/${article.id}`
  const image = {
    width: '600',
    height: '315',
    path: `${process.env.NEXT_PUBLIC_WEB_URL}/api/${article.id}/ogp`,
  }
  const breadcrumbs = [
    {
      name: 'ホーム',
      path: '/',
    },
    {
      name: article.category.name,
      path: `/categories/${article.category.id}`,
    },
    {
      name: article.title,
      path: '',
    },
  ]

  return (
    <>
      <NextHead title={title} description={article.description} url={url} image={image} isArticle />
      <Box my={4}>
        <TheBreadcrumb breadcrumbs={breadcrumbs} />
      </Box>
      <TheArticle article={article} />
      <Box my={6}>
        <TheBreadcrumb breadcrumbs={breadcrumbs} />
      </Box>
    </>
  )
}

export default Article
