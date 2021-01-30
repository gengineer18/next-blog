import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import highlight from '@/utils/highlight'
import { TArticleBody } from '@/types'

type Props = {
  body: TArticleBody[] | string
}

const STBox = styled(Box)`
  & > h1 {
    font-size: 40px;
  }
  & > h2 {
    background: linear-gradient(90deg, #1642bb, #cd241c);
    padding: 8px;
    color: white;
    font-weight: bold;
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
  & > h3 {
    line-height: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 1rem;
    margin-bottom: 1rem;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      background: #062883;
      width: 4px;
      height: 2rem;
      display: block;
      top: 0;
      left: -1rem;
    }
  }
  & > h4 {
    font-weight: bold;
    font-size: 1.2rem;
  }
  & > p {
    font-size: 1.2rem;
    margin: 0 1rem 2rem;
    line-height: 2rem;
    a {
      color: #062883;
      text-decoration: underline;
    }
    br {
      display: block;
      content: '';
      margin: 1rem 0;
    }
    code {
      display: inline-block;
      padding: 0.1em 0.25em;
      color: #ff6699;
      background-color: #e7edf3;
      border-radius: 3px;
      border: solid 1px #d6dde4;
      font-family: Consolas, Menlo, Monaco, -apple-system, BlinkMacSystemFont, 'Segoe UI', Meiryo, monospace;
      font-size: 1rem;
    }
    img {
      margin: 0 auto;
    }
  }
  & > blockquote {
    padding: 0.75rem;
    font-size: 1rem;
    margin: 0 1rem;
    line-height: 2rem;
    background-color: #e0efff;
    border-radius: 12px;
    border: 1px solid #062883;
  }
  & > pre {
    margin: 1em 0;
    padding: 1em;
    border-radius: 5px;
    background: #002451;
    color: #fff;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  & > ol {
    font-size: 1.2rem;
    list-style: decimal;
    margin-left: 2rem;
    margin-bottom: 2rem;
  }
  & > ul {
    font-size: 1.2rem;
    list-style: none;
    margin-left: 2rem;
    margin-bottom: 2rem;
    & > li {
      text-indent: -0.5rem;
      margin-bottom: 0.5rem;
      &:before {
        position: relative;
        top: -2px;
        left: -0.5rem;
        display: inline-block;
        border-radius: 100%;
        background: #062883;
        content: '';
        width: 0.6rem;
        height: 0.6rem;
      }
      & > ul {
        list-style: none;
        margin-left: 2rem;
        & > li {
          text-indent: -0.5rem;
          &:before {
            position: relative;
            top: -2px;
            left: -0.5rem;
            display: inline-block;
            border-radius: 100%;
            background: #cd241c;
            content: '';
            width: 0.5rem;
            height: 0.5rem;
          }
        }
      }
    }
  }
`

export const ArticleBody: React.FC<Props> = ({ body }) => {
  useEffect(() => {
    highlight.initHighlighting()
    highlight.initHighlighting.called = false
  })

  const articleBody = typeof body === 'string' ? body : body.map((item) => item.body).join('')

  return <STBox dangerouslySetInnerHTML={{ __html: `${articleBody}` }} />
}
