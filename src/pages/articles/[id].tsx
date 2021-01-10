import React from 'react'
import Head from 'next/head'
import { TApi, TArticle } from '@/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import { apiKey } from '@/utils/common'
import { TheArticle } from '@/components/article/organisms'
import { ogSiteName, ogUrl, ogImage, ogType, ogTitle, twSite, twCard } from '@/utils/ogp'

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
  return (
    <>
      <Head>
        <title>{`${article.title} | ${ogTitle}`}</title>
        <meta name='description' content={article.description} />
        <meta property='og:url' content={`${ogUrl}/articles/${article.id}`} />
        <meta property='og:type' content={ogType.article} />
        <meta property='og:title' content={article.title} />
        <meta property='og:description' content={article.description} />
        <meta property='og:site_name' content={ogSiteName} />
        <meta property='og:image' content={ogImage.path} />
        <meta property='og:image:width' content={ogImage.width} />
        <meta property='og:image:height' content={ogImage.height} />
        <meta name='twitter:card' content={twCard.lgImage} />
        <meta name='twitter:site' content={twSite} />
      </Head>
      <TheArticle article={article} />
    </>
  )
}

export default Article
