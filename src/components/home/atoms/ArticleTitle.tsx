import React from 'react'
import { Heading } from '@chakra-ui/react'

type Props = {
  title: string
}

export const ArticleTitle = ({ title }: Props): JSX.Element => <Heading>{title}</Heading>
