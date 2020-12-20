import React from 'react'
import { Heading } from '@chakra-ui/react'

type Props = {
  title: string
  size?: string
}

export const ArticleTitle: React.FC<Props> = ({ title, size = 'xl' }) => (
  <Heading as='h1' size={size}>
    {title}
  </Heading>
)
