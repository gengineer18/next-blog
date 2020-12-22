import React from 'react'
import { TArticle } from '@/types'
import { Flex, Box, HStack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { ArticleTitle, ArticleDate, ArticleCategory, ArticleTag, ArticleImage } from '@/components/common/article/atoms'

type Props = {
  article: TArticle
}

const STFlex = styled(Flex)`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const ArticleListItem = ({ article }: Props): JSX.Element => (
  <STFlex shadow='md' borderWidth='1px' p={8} alignItems='center' bg='blue.50'>
    {article.mainImage?.url && (
      <Box mr={2}>
        <ArticleImage imageUrl={article.mainImage.url} width={92} height={92} />
      </Box>
    )}
    <Box>
      <ArticleTitle title={article.title} size='sm' />
      <ArticleDate date={article.publishedAt} size='sm' />
      <ArticleCategory name={article.category.name} />
      <HStack spacing={2} mt={2}>
        {article.tags?.map((tag) => (
          <ArticleTag name={tag.name} key={tag.id} />
        ))}
      </HStack>
    </Box>
  </STFlex>
)
