import React from 'react'
import { Container, Flex, Box, Spacer } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { TheLogo } from '../atoms'

const STBox = styled(Box)`
  background: linear-gradient(270deg, #e5012c 0%, #062883 30%);
`

export const TheHeader = React.memo(
  (): JSX.Element => (
    <STBox>
      <Container maxW='6xl'>
        <Flex>
          <TheLogo width={100} height={60} />
          <Spacer />
        </Flex>
      </Container>
    </STBox>
  )
)
