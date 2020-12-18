import React from 'react'
import Link from 'next/link'
import { Container, Flex, Box, Spacer } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { baseW } from '@/utils/common'
import { TheLogo } from '../atoms'

const STWrapperBox = styled(Box)`
  background: linear-gradient(270deg, #e5012c 0%, #062883 30%);
`

const STLogoBox = styled(Box)`
  &:hover {
    opacity: 0.8;
  }
`

export const TheHeader = React.memo(
  (): JSX.Element => (
    <STWrapperBox>
      <Container maxW={baseW}>
        <Flex>
          <Link href='/'>
            <a>
              <STLogoBox>
                <TheLogo width={100} height={60} />
              </STLogoBox>
            </a>
          </Link>
          <Spacer />
        </Flex>
      </Container>
    </STWrapperBox>
  )
)
