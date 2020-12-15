import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Button } from '@chakra-ui/react'
import { TApi } from '@/types/Api'
import { TArticle } from '@/types/Article'
import { apiKey } from '@/utils/common'

type Props = {
  articles: TArticle[]
}

const Home = ({ articles }: Props): JSX.Element => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main>
      <div>
        <ul>
          {articles.map((article) => (
            <li key={article.slug}>{article.title}</li>
          ))}
        </ul>
        <p>test</p>
        <Button colorScheme='blue'>testtest</Button>
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