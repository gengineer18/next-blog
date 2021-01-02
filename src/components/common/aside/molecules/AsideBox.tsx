import React from 'react'
import { Box } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib/cjs/iconBase'
import { AsideTitle } from '../atoms'

type Props = {
  title: string
  icon: IconType
}

export const AsideBox: React.FC<Props> = ({ children, title, icon }) => (
  <Box borderRadius={4} borderWidth='1px' shadow='md'>
    <AsideTitle title={title} icon={icon} />
    <Box p={4}>{children}</Box>
  </Box>
)
