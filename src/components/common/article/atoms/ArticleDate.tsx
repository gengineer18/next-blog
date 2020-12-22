import React from 'react'
import { Text } from '@chakra-ui/react'
import { dateToYYYYMMDD } from '@/utils/common'

type Props = {
  date: Date
  size?: string
}

export const ArticleDate: React.FC<Props> = ({ date, size = 'md' }) => {
  const convertedDate = dateToYYYYMMDD(date)
  return <Text fontSize={size}>{convertedDate}</Text>
}
