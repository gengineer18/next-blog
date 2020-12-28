import React, { useState, useCallback } from 'react'
import styled from '@emotion/styled'
import { Box, Flex, Button, Heading, Collapse } from '@chakra-ui/react'
import { ArticleContents } from '../atoms'

type Props = {
  contents: string
}

const STOuterBox = styled(Box)`
  padding: 4px;
  background: linear-gradient(to bottom, #1642bb, #cd241c);
`

const STInnerBox = styled(Box)`
  background-color: #fff;
`

export const ArticleContentsBox: React.FC<Props> = ({ contents }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const handleClick = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])
  return (
    <>
      <STOuterBox>
        <STInnerBox p={8}>
          <Flex justifyContent='space-between'>
            <Heading as='h2' size='lg'>
              Contents
            </Heading>
            <Button onClick={handleClick} size='sm'>
              {isOpen ? 'Close' : 'Open'}
            </Button>
          </Flex>
          <Collapse in={isOpen} animateOpacity>
            <Box pt={4} pl={4}>
              <ArticleContents contents={contents} />
            </Box>
          </Collapse>
        </STInnerBox>
      </STOuterBox>
    </>
  )
}
