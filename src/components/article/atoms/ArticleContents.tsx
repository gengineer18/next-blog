import React, { memo } from 'react'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

type Props = {
  contents: string
}

const STBox = styled(Box)`
  & > ol {
    & > li {
      font-size: 1.1rem;
      list-style-type: none;
      counter-increment: number;
      position: relative;
      padding-left: 1rem;
      &:before {
        position: absolute;
        left: -1.6rem;
        top: -0.1rem;
        font-size: 1.2rem;
        content: counter(number, decimal-leading-zero);
        color: #1642bb;
        margin-right: 1rem;
      }
      &:after {
        position: absolute;
        content: '';
        left: 0.1rem;
        height: 1.2rem;
        top: 0.2rem;
        width: 2px;
        background: #1642bb;
      }
      & > ol {
        & > li {
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

export const ArticleContents: React.FC<Props> = memo(({ contents }) => (
  <STBox dangerouslySetInnerHTML={{ __html: `${contents}` }} pt={4} pl={3} />
))
