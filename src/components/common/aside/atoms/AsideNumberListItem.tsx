import React from 'react'
import Link from 'next/link'
import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

type Props = {
  id: string
  name: string
  count: number
  pathRoot: string
}

const STBox = styled(Box)`
  border-bottom: 2px #e53e3e solid;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    border-bottom: 2px #1642bb solid;
  }
`

export const AsideNumberListItem: React.FC<Props> = ({ id, name, count, pathRoot }) => (
  <Link href={`/${pathRoot}/${id}`}>
    <STBox>{`${name} (${count})`}</STBox>
  </Link>
)
