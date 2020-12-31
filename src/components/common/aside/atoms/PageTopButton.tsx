import React from 'react'
import { Circle } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'

const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export const PageTopButton: React.FC = () => (
  <Circle size='56px' bg='blue.600' color='white' onClick={handleClick}>
    <ArrowUpIcon w={6} h={6} />
  </Circle>
)
