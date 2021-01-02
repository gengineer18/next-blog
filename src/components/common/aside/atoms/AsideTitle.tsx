import React from 'react'
import { Center, Text, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib/cjs/iconBase'

type Props = {
  title: string
  icon: IconType
}

export const AsideTitle: React.FC<Props> = ({ title, icon }) => (
  <Center bgColor='#1642bb' color='white' py={2} borderTopLeftRadius={4} borderTopRightRadius={4}>
    <Icon mr={2} as={icon} />
    <Text fontSize='lg' fontWeight='bold'>
      {title}
    </Text>
  </Center>
)
