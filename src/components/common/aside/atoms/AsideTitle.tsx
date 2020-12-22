import React from 'react'
import { Center, Text } from '@chakra-ui/react'

type Props = {
  title: string
}

export const AsideTitle: React.FC<Props> = ({ title }) => (
  <Center bgColor='#1642bb' color='white' py={2} borderTopLeftRadius={4} borderTopRightRadius={4}>
    <Text fontSize='lg' fontWeight='bold'>
      {title}
    </Text>
  </Center>
)
