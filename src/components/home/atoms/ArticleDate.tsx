import React from 'react'
import { Text } from '@chakra-ui/react'
import { dateToYYYYMMDD } from '@/utils/common'

type Props = {
  date: Date
}

export const ArticleDate: React.FC<Props> = ({ date }) => {
  const convertedDate = dateToYYYYMMDD(date)
  return <Text>{convertedDate}</Text>
}
