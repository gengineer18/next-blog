import React from 'react'
import Link from 'next/link'
import { Grid, GridItem } from '@chakra-ui/react'
import { TArticle } from '@/types'
import { ArticleListItem } from '../molecules'

type Props = {
  articles: TArticle[]
}

export const ArticleList = ({ articles }: Props): JSX.Element => (
  <ul>
    <Grid templateColumns='repeat(2, 1fr)' gap={4}>
      {articles.map((article) => (
        <li key={article.id}>
          <Link href={`/articles/${article.id}`}>
            <GridItem colSpan={1}>
              <ArticleListItem article={article} />
            </GridItem>
          </Link>
        </li>
      ))}
    </Grid>
  </ul>
)
