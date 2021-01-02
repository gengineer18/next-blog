import React from 'react'
import { TArticle } from '@/types'
import { Box } from '@chakra-ui/react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { AsideBox } from '../molecules'
import { AsideNumberListItem } from '../atoms'
import { useArchives } from './hooks/useArchives'

type Props = {
  articles: TArticle[]
}

export const AsideArchives: React.FC<Props> = ({ articles }) => {
  const { articlesArray } = useArchives({ articles })

  return (
    <AsideBox title='アーカイブ' icon={FaRegCalendarAlt}>
      {articlesArray.map((article) =>
        article.count ? (
          <Box key={article.id} mt={2}>
            <AsideNumberListItem
              id={article.publishedMonth || ''}
              name={article.viewPublishedMonth || ''}
              count={article.count}
              pathRoot='archives'
            />
          </Box>
        ) : (
          <React.Fragment key={article.id} />
        )
      )}
    </AsideBox>
  )
}
