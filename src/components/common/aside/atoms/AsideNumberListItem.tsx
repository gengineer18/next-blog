import React from 'react'
import Link from 'next/link'
import { Box } from '@chakra-ui/react'
import { TCategory, TTag } from '@/types'
import styled from '@emotion/styled'

type Props = {
  item: TCategory | TTag
  pathRoot: 'categories' | 'tags'
}

const STBox = styled(Box)`
  border-bottom: 2px #e53e3e solid;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    border-bottom: 2px #1642bb solid;
  }
`

export const AsideNumberListItem: React.FC<Props> = ({ item, pathRoot }) => (
  <STBox>
    <Link href={`/${pathRoot}/${item.id}`}>{`${item.name} (${item.count})`}</Link>
  </STBox>
)
