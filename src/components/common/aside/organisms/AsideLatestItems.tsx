import React from 'react'
import { TArticle } from '@/types'
import { Box } from '@chakra-ui/react'
import { AsideBox } from '../molecules'

type Props = {
  latestArticles: TArticle[]
}

export const AsideLatestItems: React.FC<Props> = ({ latestArticles }) => (
  <AsideBox title='最新記事'>
    {latestArticles.map((article) => (
      <Box key={article.id}>{article.title}</Box>
    ))}
  </AsideBox>
)
