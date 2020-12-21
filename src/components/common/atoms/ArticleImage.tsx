import React from 'react'
import Image from 'next/image'

type Props = {
  imageUrl: string
  width: number
  height: number
}

export const ArticleImage: React.FC<Props> = ({ imageUrl, width, height }) => (
  <Image src={`${imageUrl}`} width={width} height={height} />
)
