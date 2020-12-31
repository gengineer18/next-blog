/* eslint-disable react/style-prop-object */
import React, { useEffect, useCallback } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { ChakraProvider, Grid, GridItem, Container } from '@chakra-ui/react'
import { TheHeader, TheAside, TheFooter } from '@/components/common/layout/organisms'
import { baseW, apiKey } from '@/utils/common'
import reset from 'emotion-reset'
import { Global, css } from '@emotion/react'
import { TApi, TArticle, TCmsItems, TCategory, TTag } from '@/types'
import * as gtag from '@/utils/gtag'
import { ogTitle, ogDescription, ogSiteName, ogType, ogUrl, ogImage, twCard, twSite } from '@/utils/ogp'

function MyApp({ Component, pageProps, cmsItems }: AppProps & TCmsItems): JSX.Element {
  const router = useRouter()

  const handleRouteChange = useCallback((path: string) => {
    gtag.pageview(path)
  }, [])

  const eventsOff = useCallback(() => {
    router.events.off('routeChangeComplete', handleRouteChange)
  }, [])

  useEffect(() => {
    if (!gtag.existsGaId) {
      return eventsOff()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      eventsOff()
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>{ogTitle}</title>
        <meta charSet='utf-8' />
        <meta name='description' content={ogDescription} />
        <meta property='og:url' content={ogUrl} />
        <meta property='og:type' content={ogType.web} />
        <meta property='og:title' content={ogTitle} />
        <meta property='og:description' content={ogDescription} />
        <meta property='og:site_name' content={ogSiteName} />
        <meta property='og:image' content={ogImage.path} />
        <meta property='og:image:width' content={ogImage.width} />
        <meta property='og:image:height' content={ogImage.height} />
        <meta name='twitter:card' content={twCard.lgImage} />
        <meta name='twitter:site' content={twSite} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Global
        styles={css`
          ${reset}
        `}
      />
      <ChakraProvider>
        <TheHeader />
        <Container maxW={baseW}>
          <Grid templateColumns='repeat(10, 1fr)' gap={8} mt={8}>
            <GridItem colSpan={[10, 10, 7]}>
              <main>
                <Component {...pageProps} />
              </main>
            </GridItem>
            <GridItem colSpan={[10, 10, 3]}>
              <aside>
                <TheAside cmsItems={cmsItems} />
              </aside>
            </GridItem>
          </Grid>
        </Container>
        <footer>
          <TheFooter />
        </footer>
      </ChakraProvider>
    </>
  )
}

MyApp.getInitialProps = async () => {
  const articles: TApi<TArticle> = await fetch(`${process.env.API_PATH}/blog`, apiKey as RequestInit)
    .then((res) => res.json())
    .catch(() => null)

  const categories: TApi<TCategory> = await fetch(`${process.env.API_PATH}/categories`, apiKey as RequestInit)
    .then((res) => res.json())
    .catch(() => null)

  const tags: TApi<TTag> = await fetch(`${process.env.API_PATH}/tags`, apiKey as RequestInit)
    .then((res) => res.json())
    .catch(() => null)

  return {
    cmsItems: {
      articles: articles.contents,
      categories: categories.contents,
      tags: tags.contents,
    },
  }
}

export default MyApp
