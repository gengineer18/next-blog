import React from 'react'
import { Badge } from '@chakra-ui/react'

type Props = {
  name: string
}

export const ArticleCategory = ({ name }: Props): JSX.Element => (
  <Badge variant='solid' colorScheme='blue' fontSize='0.8rem'>
    {name}
  </Badge>
)
