import React from 'react'
import {
  TwitterIcon,
  TwitterShareButton,
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
} from 'react-share'
import { Center, Box, HStack, Text } from '@chakra-ui/react'

type Props = {
  title: string
  url: string
}

export const ArticleShare: React.FC<Props> = ({ title, url }) => {
  const size = 48
  return (
    <Center>
      <Box>
        <Text textAlign='center' fontSize='1.2rem'>
          \ Share! /
        </Text>
        <HStack spacing={4}>
          <TwitterShareButton url={url} title={title} related={['@gengineer18']}>
            <TwitterIcon size={size} round />
          </TwitterShareButton>
          <FacebookShareButton url={url} quote={title}>
            <FacebookIcon size={size} round />
          </FacebookShareButton>
          <HatenaShareButton url={url} title={title}>
            <HatenaIcon size={size} round />
          </HatenaShareButton>
        </HStack>
      </Box>
    </Center>
  )
}
