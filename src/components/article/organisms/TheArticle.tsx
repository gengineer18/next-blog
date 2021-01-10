import { TArticle } from '@/types'
import React from 'react'
import { Box, Center, HStack } from '@chakra-ui/react'
import { ArticleCategory, ArticleDate, ArticleImage, ArticleTag, ArticleTitle } from '@/components/common/article/atoms'
import { ArticleBody } from '../atoms'
import { ArticleContentsBox, ArticleShare } from '../molecules'

type Props = {
  article: TArticle
}

export const TheArticle = ({ article }: Props): JSX.Element => (
  <article>
    {article.mainImage && (
      <Center mb={6}>
        <ArticleImage imageUrl={article.mainImage.url} width={500} height={250} />
      </Center>
    )}
    <Box mb={2}>
      <ArticleTitle title={article.title} size='xl' />
    </Box>
    <Box mb={8}>
      <ArticleDate date={article.publishedAt} />
      <ArticleCategory name={article.category.name} />
      <HStack spacing={2} mt={2}>
        {article.tags?.map((tag) => (
          <ArticleTag name={tag.name} key={tag.id} />
        ))}
      </HStack>
    </Box>
    <Box mb={8}>
      <ArticleContentsBox contents={article.contents} />
    </Box>
    <ArticleBody body={article.body} />
    <ArticleShare url={`https://blog-sorellina-coda.dev/articles/${article.id}`} title={article.title} />
  </article>
)
