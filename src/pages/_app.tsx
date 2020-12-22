/* eslint-disable react/style-prop-object */
import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider, Grid, GridItem, Container } from '@chakra-ui/react'
import { TheHeader, TheAside } from '@/components/common/layout/organisms'
import { baseW } from '@/utils/common'
import reset from 'emotion-reset'
import { Global, css } from '@emotion/react'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
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
                <TheAside />
              </aside>
            </GridItem>
          </Grid>
        </Container>
        <footer>testFooter</footer>
      </ChakraProvider>
    </>
  )
}

export default MyApp
