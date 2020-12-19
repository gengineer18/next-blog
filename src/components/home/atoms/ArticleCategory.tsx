import React from 'react'
import { Badge } from '@chakra-ui/react'

type Props = {
  name: string
}

export const ArticleCategory: React.FC<Props> = ({ name }) => (
  <Badge textTransform='none' variant='solid' bg='blue.600' fontSize='0.8rem' py='0.1rem' px='0.3rem'>
    {name}
  </Badge>
)
