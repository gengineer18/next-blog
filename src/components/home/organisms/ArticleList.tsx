import React from 'react'
import Link from 'next/link'
import { Grid, GridItem } from '@chakra-ui/react'
import { TArticle } from '@/types'
import { ArticleListItem } from '../molecules'

type Props = {
  articles: TArticle[]
}

export const ArticleList = ({ articles }: Props): JSX.Element => (
  <Grid templateColumns='repeat(2, 1fr)' gap={4} as='ul'>
    {articles.map((article) => (
      <GridItem colSpan={[2, 2, 1]} key={article.id} as='li'>
        <Link href={`/articles/${article.id}`}>
          <a>
            <ArticleListItem article={article} />
          </a>
        </Link>
      </GridItem>
    ))}
  </Grid>
)
