import React from 'react'
import { TArticle } from '@/types'
import { Box } from '@chakra-ui/react'
import { IconPencil } from '@/utils/icons'
import { AsideBox } from '../molecules'
import { AsideArticleListItem } from '../atoms'

type Props = {
  latestArticles: TArticle[]
}

export const AsideLatestItems: React.FC<Props> = ({ latestArticles }) => {
  const latestArticlesArray = []
  for (let i = 0; i < 5; i += 1) {
    latestArticlesArray.push(latestArticles[i])
  }
  return (
    <AsideBox title='最新記事' icon={IconPencil}>
      {latestArticlesArray.map((article) => (
        <Box key={article.id} my={2}>
          <AsideArticleListItem article={article} />
        </Box>
      ))}
    </AsideBox>
  )
}
