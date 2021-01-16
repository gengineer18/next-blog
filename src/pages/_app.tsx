/* eslint-disable react/style-prop-object */
import React, { useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { ChakraProvider, Grid, GridItem, Container, extendTheme } from '@chakra-ui/react'
import { TheHeader, TheAside, TheFooter } from '@/components/common/layout/organisms'
import { baseW, apiKey } from '@/utils/common'
import reset from 'emotion-reset'
import { Global, css } from '@emotion/react'
import { TApi, TArticle, TCmsItems, TCategory, TTag } from '@/types'
import * as gtag from '@/utils/gtag'

function MyApp({ Component, pageProps, cmsItems }: AppProps & TCmsItems): JSX.Element {
  const theme = extendTheme({
    colors: {
      blue: {
        600: '#1642bb',
      },
      red: {
        500: '#cc241c',
      },
    },
  })

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
      <Global
        styles={css`
          ${reset}
        `}
      />
      <ChakraProvider theme={theme}>
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
