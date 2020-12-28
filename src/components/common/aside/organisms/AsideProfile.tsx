import { Box, Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { AsideBox } from '../molecules'

export const AsideProfile: React.FC = () => (
  <AsideBox title='プロフィール'>
    <Box>Profile</Box>

    <Flex justifyContent='center'>
      <Link href='/profile'>
        <Button fontSize='sm'>プロフィールはこちらから</Button>
      </Link>
    </Flex>
  </AsideBox>
)
