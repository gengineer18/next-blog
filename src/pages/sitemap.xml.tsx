import { GetServerSidePropsContext } from 'next'
import { TApi, TArticle } from '@/types'
import { apiKey, dateToYYYYMMDD, LIMIT_ARTICLES } from '@/utils/common'

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const xml = await generateSitemapXml()

  res.statusCode = 200
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate') // キャッシュは24時間
  res.setHeader('Content-Type', 'text/xml')
  res.end(xml)

  return {
    props: {},
  }
}

async function generateSitemapXml(): Promise<string> {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

  const articles: TApi<TArticle> = await fetch(
    `${process.env.API_PATH}/blog?limit=${LIMIT_ARTICLES}`,
    apiKey as RequestInit
  )
    .then((res) => res.json())
    .catch(() => null)

  articles.contents.forEach((article) => {
    xml += `
      <url>
        <loc>${process.env.NEXT_PUBLIC_WEB_URL}/articles/${article.id}</loc>
        <lastmod>${dateToYYYYMMDD(article.updatedAt, 'YYYY-MM-DD')}</lastmod>
        <changefreq>weekly</changefreq>
      </url>
    `
  })

  xml += '</urlset>'

  return xml
}

const Page = (): null => null
export default Page
