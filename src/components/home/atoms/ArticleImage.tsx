import React from 'react'
import Image from 'next/image'

type Props = {
  imageUrl: string
}

export const ArticleImage: React.FC<Props> = ({ imageUrl }) => <Image src={`${imageUrl}`} width={92} height={92} />
