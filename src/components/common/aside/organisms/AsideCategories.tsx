import React from 'react'
import { TCategory, TArticle } from '@/types'
import { Box } from '@chakra-ui/react'
import { AsideBox } from '../molecules'
import { AsideNumberListItem } from '../atoms'

type Props = {
  categories: TCategory[]
  articles: TArticle[]
}

export const AsideCategories: React.FC<Props> = ({ categories, articles }) => {
  const categoriesArray = categories
  for (let i = 0; i < categoriesArray.length; i += 1) {
    const categoryArticle = articles.filter((article) => article.category.id === categoriesArray[i].id)
    categoriesArray[i].count = categoryArticle.length
  }
  return (
    <AsideBox title='カテゴリー'>
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
