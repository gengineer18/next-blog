import { Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

export const TheFooter: React.FC = () => {
  const caption = '©️ 2020 Sorellina Coda'
  return (
    <Flex py={8}>
      <Spacer />
      <Text>{caption}</Text>
      <Link href='./privacy'>
        <a>
          <Text ml={8} color='blue.600' textDecoration='underline'>
            プライバシーポリシー
          </Text>
        </a>
      </Link>
      <Spacer />
    </Flex>
  )
}
