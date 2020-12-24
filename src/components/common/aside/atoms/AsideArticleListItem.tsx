import React from 'react'
import Link from 'next/link'
import { Box } from '@chakra-ui/react'
import { TArticle } from '@/types'
import { dateToYYYYMMDD } from '@/utils/common'
import styled from '@emotion/styled'

type Props = {
  article: TArticle
}

const STBox = styled(Box)`
  border-bottom: 2px #e53e3e solid;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    border-bottom: 2px #1642bb solid;
  }
`

export const AsideArticleListItem: React.FC<Props> = ({ article }) => (
  <STBox>
    <Link href={`/articles/${article.id}`}>{`${article.title} / ${dateToYYYYMMDD(article.publishedAt)}`}</Link>
  </STBox>
)
