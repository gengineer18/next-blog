import React from 'react'
import { Box } from '@chakra-ui/react'
import { AsideTitle } from '../atoms'

type Props = {
  title: string
}

export const AsideBox: React.FC<Props> = ({ children, title }) => (
  <Box borderRadius={4} borderWidth='1px' shadow='md'>
    <AsideTitle title={title} />
    <Box p={4}>{children}</Box>
  </Box>
)
