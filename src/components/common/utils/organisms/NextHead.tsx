import React from 'react'
import Head from 'next/head'
import { ogTitle, ogDescription, ogSiteName, ogType, ogUrl, ogImage, twCard, twSite } from '@/utils/ogp'

type Props = {
  title?: string
  description?: string
  url?: string
  image?: {
    path: string
    width: string
    height: string
  }
  isArticle?: boolean
}

export const NextHead: React.FC<Props> = ({
  title = ogTitle,
  description = ogDescription,
  url = ogUrl,
  image = ogImage,
  isArticle = false,
}) => (
  <Head>
    <title>{title}</title>
    <meta charSet='utf-8' />
    <meta name='description' content={description} />
    <meta name='twitter:card' content={twCard.lgImage} />
    <meta name='twitter:site' content={twSite} />
    <meta property='og:locale' content='ja_JP' />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:image' content={image.path} />
    <meta property='og:image:width' content={image.width} />
    <meta property='og:image:height' content={image.height} />
    <meta property='og:site_name' content={ogSiteName} />
    <meta property='og:url' content={url} />
    <meta property='og:type' content={isArticle ? ogType.article : ogType.web} />
    <link rel='shortcut icon' href='/favicon.ico' />
    <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
    <link rel='icon' type='image/png' href='/android-chrome-256x256.png' />
  </Head>
)
