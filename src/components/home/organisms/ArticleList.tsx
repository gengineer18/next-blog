import React from 'react'
import Link from 'next/link'
import { VStack } from '@chakra-ui/react'
import { TArticle } from '@/types'
import { ArticleListItem } from '../molecules'

type Props = {
  articles: TArticle[]
}

export const ArticleList = ({ articles }: Props): JSX.Element => (
  <VStack spacing={6} align='stretch'>
    {articles.map((article) => (
      <Link href={`/articles/${article.id}`} key={article.id}>
        <a>
          <ArticleListItem article={article} />
        </a>
      </Link>
    ))}
  </VStack>
)
