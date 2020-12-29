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
    background-color: #f4f4f4;
  }
`

export const ArticleListItem = ({ article }: Props): JSX.Element => (
  <STFlex shadow='lg' borderWidth='1px' p={8} alignItems='center' h='100%'>
    {article.mainImage?.url && (
      <Box mr={2}>
        <ArticleImage imageUrl={article.mainImage.url} width={92} height={92} />
      </Box>
    )}
    <Box>
      <ArticleTitle title={article.title} size='sm' />
      <ArticleDate date={article.publishedAt} size='sm' />
      <ArticleCategory name={article.category.name} />
      <HStack spacing={0} wrap='wrap' shouldWrapChildren>
        {article.tags?.map((tag) => (
          <Box mt={1} mr={2} key={tag.id}>
            <ArticleTag name={tag.name} />
          </Box>
        ))}
      </HStack>
    </Box>
  </STFlex>
)
