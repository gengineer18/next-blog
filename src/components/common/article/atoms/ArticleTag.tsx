import React from 'react'
import { Badge } from '@chakra-ui/react'

type Props = {
  name: string
}

export const ArticleTag: React.FC<Props> = ({ name }) => (
  <Badge textTransform='none' variant='solid' colorScheme='red' fontSize='0.8rem' py='0.1rem' px='0.3rem'>
    {name}
  </Badge>
)
