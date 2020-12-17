import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { TheHeader } from '@/components/common/organisms'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <TheHeader />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
