import React from 'react'
import Image from 'next/image'

type Props = {
  width?: number
  height?: number
}

export const TheLogo = ({ width = 0, height = 0 }: Props): JSX.Element => (
  <Image src='/logo.svg' alt='logo' width={width} height={height} loading='lazy' />
)
