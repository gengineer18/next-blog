import React from 'react'
import { TTag, TArticle } from '@/types'
import { Box } from '@chakra-ui/react'
import { AsideBox } from '../molecules'
import { AsideNumberListItem } from '../atoms'
import { useTags } from './hooks/useTags'

type Props = {
  tags: TTag[]
  articles: TArticle[]
}

export const AsideTags: React.FC<Props> = ({ tags, articles }) => {
  const { tagsArray } = useTags({ tags, articles })
  return (
    <AsideBox title='タグ'>
      {tagsArray.map((tag) =>
        tag.count !== 0 ? (
          <Box key={tag.id} mt={2}>
            <AsideNumberListItem item={tag} pathRoot='tags' />
          </Box>
        ) : (
          <React.Fragment key={tag.id} />
        )
      )}
    </AsideBox>
  )
}
