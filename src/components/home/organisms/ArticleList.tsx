import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { Grid, GridItem } from '@chakra-ui/react'
import { TArticle } from '@/types'
import { ArticleListItem } from '../molecules'

type Props = {
  articles: TArticle[]
}

const STLi = styled.li`
  height: 100%;
`

export const ArticleList = ({ articles }: Props): JSX.Element => (
  <ul>
    <Grid templateColumns='repeat(2, 1fr)' gap={4}>
      {articles.map((article) => (
        <GridItem colSpan={[2, 2, 1]} key={article.id}>
          <STLi>
            <Link href={`/articles/${article.id}`}>
              <a>
                <ArticleListItem article={article} />
              </a>
            </Link>
          </STLi>
        </GridItem>
      ))}
    </Grid>
  </ul>
)
