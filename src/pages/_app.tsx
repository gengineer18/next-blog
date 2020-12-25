/* eslint-disable react/style-prop-object */
import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider, Grid, GridItem, Container } from '@chakra-ui/react'
import { TheHeader, TheAside } from '@/components/common/layout/organisms'
import { baseW, apiKey } from '@/utils/common'
import reset from 'emotion-reset'
import { Global, css } from '@emotion/react'
import { TApi, TArticle, TCmsItems, TCategory, TTag } from '@/types'

function MyApp({ Component, pageProps, cmsItems }: AppProps & TCmsItems): JSX.Element {
  return (
    <>
      <Global
        styles={css`
          ${reset}
        `}
      />
      <ChakraProvider>
        <TheHeader />
        <Container maxW={baseW}>
          <Grid templateColumns='repeat(8, 1fr)' gap={4} mt={8}>
            <GridItem colSpan={[8, 8, 6]}>
              <main>
                <Component {...pageProps} />
              </main>
            </GridItem>
            <GridItem colSpan={[8, 8, 2]}>
              <aside>
                <TheAside cmsItems={cmsItems} />
              </aside>
            </GridItem>
          </Grid>
        </Container>
        <footer>testFooter</footer>
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
