/* eslint-disable react/style-prop-object */
import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider, Grid, GridItem, Container } from '@chakra-ui/react'
import { TheHeader } from '@/components/common/organisms'
import { baseW } from '@/utils/common'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <TheHeader />
      <Container maxW={baseW}>
        <Grid templateColumns='repeat(8, 1fr)' gap={4}>
          <GridItem colSpan={6}>
            <main style={{ border: '1px solid #000' }}>
              <Component {...pageProps} />
            </main>
          </GridItem>
          <GridItem colSpan={2}>
            <aside style={{ border: '1px solid #633' }}>
              <p>testAside</p>
            </aside>
          </GridItem>
        </Grid>
      </Container>
      <footer>testFooter</footer>
    </ChakraProvider>
  )
}

export default MyApp
