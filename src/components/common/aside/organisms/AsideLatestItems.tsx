import React from 'react'
import { TArticle } from '@/types'
import { Box } from '@chakra-ui/react'
import { IconPencil } from '@/utils/icons'
import { AsideBox } from '../molecules'
import { AsideArticleListItem } from '../atoms'

type Props = {
  latestArticles: TArticle[]
}

export const AsideLatestItems: React.FC<Props> = ({ latestArticles }) => (
  <AsideBox title='最新記事' icon={IconPencil}>
    {latestArticles.map((article) => (
      <Box key={article.id} my={2}>
        <AsideArticleListItem article={article} />
      </Box>
    ))}
  </AsideBox>
)
