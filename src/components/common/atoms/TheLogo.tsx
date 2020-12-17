import React from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

type Props = {
  width?: number
  height?: number
}

export const TheLogo = ({ width = 0, height = 0 }: Props): JSX.Element => (
  <Image src='/vercel.svg' alt='logo' width={width} height={height} loading='lazy' />
)
