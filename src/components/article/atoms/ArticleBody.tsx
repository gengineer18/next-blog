import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import highlight from '@/utils/highlight'

type Props = {
  body: string
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
      color: #444;
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
    margin-left: 1rem;
  }
  & > ul {
    font-size: 1.2rem;
    list-style: none;
    margin-left: 2rem;
    margin-bottom: 2rem;
    & > li {
      text-indent: -1rem;
      margin-bottom: 0.5rem;
      &:before {
        content: '●';
        color: #062883;
        margin-right: 0.5rem;
      }
      & > ul {
        list-style: none;
        margin-left: 2rem;
        & > li {
          text-indent: -1rem;
          &:before {
            content: '●';
            font-size: 0.75rem;
            color: #cd241c;
            margin-right: 0.5rem;
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
  return <STBox dangerouslySetInnerHTML={{ __html: `${body}` }} />
}
