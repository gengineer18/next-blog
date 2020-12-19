import React from 'react'
import { Heading } from '@chakra-ui/react'

type Props = {
  title: string
}

export const ArticleTitle: React.FC<Props> = ({ title }) => <Heading>{title}</Heading>
