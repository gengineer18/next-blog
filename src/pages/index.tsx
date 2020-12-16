import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { TApi } from '@/types/Api'
import { TArticle } from '@/types/Article'
import { apiKey } from '@/utils/common'

type Props = {
  articles: TArticle[]
}

const Home = ({ articles }: Props): JSX.Element => (
  <div>
    <Head>
      <title>Blog</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

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
  </div>
)

export const getStaticProps: GetStaticProps = async () => {
  const data: TApi<TArticle> = await fetch(process.env.API_PATH as string, apiKey as RequestInit)
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      articles: data.contents,
    },
  }
}

export default Home
