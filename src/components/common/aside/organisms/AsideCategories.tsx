import React from 'react'
import { TCategory, TArticle } from '@/types'
import { Box } from '@chakra-ui/react'
import { FaFolderOpen } from 'react-icons/fa'
import { AsideBox } from '../molecules'
import { AsideNumberListItem } from '../atoms'
import { useCategories } from './hooks/useCategories'

type Props = {
  categories: TCategory[]
  articles: TArticle[]
}

export const AsideCategories: React.FC<Props> = ({ categories, articles }) => {
  const { categoriesArray } = useCategories({ categories, articles })
  return (
    <AsideBox title='カテゴリー' icon={FaFolderOpen}>
      {categoriesArray.map((category) =>
        category.count ? (
          <Box key={category.id} mt={2}>
            <AsideNumberListItem id={category.id} name={category.name} count={category.count} pathRoot='categories' />
          </Box>
        ) : (
          <React.Fragment key={category.id} />
        )
      )}
    </AsideBox>
  )
}
