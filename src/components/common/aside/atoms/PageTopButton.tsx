import React from 'react'
import { Circle } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'

const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const STCircle = styled(Circle)`
  cursor: pointer;
`

export const PageTopButton: React.FC = () => (
  <STCircle size='56px' bg='blue.600' color='white' onClick={handleClick}>
    <ArrowUpIcon w={6} h={6} />
  </STCircle>
)
