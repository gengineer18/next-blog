import React from 'react'
import { TTag } from '@/types'
import { Box } from '@chakra-ui/react'
import { AsideBox } from '../molecules'

type Props = {
  tags: TTag[]
}

export const AsideTags: React.FC<Props> = ({ tags }) => (
  <AsideBox title='タグ'>
    {tags.map((tag) => (
      <Box key={tag.id}>{tag.name}</Box>
    ))}
  </AsideBox>
)
