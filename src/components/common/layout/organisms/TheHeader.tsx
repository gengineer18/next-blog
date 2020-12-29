import React from 'react'
import Link from 'next/link'
import { Container, Flex, Box, Spacer } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { baseW } from '@/utils/common'
import { TheLogo } from '../../utils/atoms'

const STWrapperBox = styled(Box)`
  background: linear-gradient(90deg, #1642bb, #cd241c);
  padding-bottom: 8px;
`

const STInnerBox = styled(Box)`
  background: white;
`

const STLogoBox = styled(Box)`
  &:hover {
    opacity: 0.8;
  }
`

export const TheHeader = React.memo(
  (): JSX.Element => (
    <STWrapperBox>
      <STInnerBox>
        <Container maxW={baseW}>
          <Flex>
            <Spacer />
            <Link href='/'>
              <a>
                <STLogoBox>
                  <TheLogo width={280} height={100} />
                </STLogoBox>
              </a>
            </Link>
            <Spacer />
          </Flex>
        </Container>
      </STInnerBox>
    </STWrapperBox>
  )
)
