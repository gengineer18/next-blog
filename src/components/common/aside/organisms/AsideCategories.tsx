import React from 'react'
import { TCategory } from '@/types'
import { Box } from '@chakra-ui/react'
import { AsideBox } from '../molecules'

type Props = {
  categories: TCategory[]
}

export const AsideCategories: React.FC<Props> = ({ categories }) => (
  <AsideBox title='カテゴリー'>
    {categories.map((category) => (
      <Box key={category.id}>{category.name}</Box>
    ))}
  </AsideBox>
)
