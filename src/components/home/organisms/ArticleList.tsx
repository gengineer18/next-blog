import React from 'react'
import Link from 'next/link'
import { Box } from '@chakra-ui/react'
import { TArticle } from '@/types/Article'

type Props = {
  articles: TArticle[]
}

export const ArticleList = ({ articles }: Props): JSX.Element => (
  <main>
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.id}`}>
              <Box>
                <h2>{article.title}</h2>
                <p>{article.publishedAt}</p>
              </Box>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </main>
)
