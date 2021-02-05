import React from 'react'
import { useRouter } from 'next/router'
import { getPageCount } from '@/utils/pagination'
import { ButtonProps } from '@chakra-ui/react'
import { Paginator, Container, PageGroup, Previous, Next } from 'chakra-paginator'
import { IconPrev, IconNext } from '@/utils/icons'

type Props = {
  totalCount: number
}

export const Pagination: React.FC<Props> = React.memo(({ totalCount }) => {
  const router = useRouter()

  const pageCount: number[] = getPageCount(totalCount)
  const outerLimit = 2
  const innerLimit = 1

  const baseStyles: ButtonProps = {
    w: 8,
    fontSize: 'sm',
    color: 'white',
  }

  const normalStyles: ButtonProps = {
    ...baseStyles,
    bg: 'blue.600',
  }

  const activeStyles: ButtonProps = {
    ...baseStyles,
    bg: 'red.500',
  }

  const separatorStyles: ButtonProps = {
    ...baseStyles,
    bg: 'gray.200',
    color: 'black',
  }

  const handlePageChange = (pageId: number) => {
    router.push(`/page/${pageId}`)
  }

  return (
    <Paginator
      pagesQuantity={pageCount.length}
      innerLimit={innerLimit}
      outerLimit={outerLimit}
      normalStyles={normalStyles}
      activeStyles={activeStyles}
      separatorStyles={separatorStyles}
      onPageChange={handlePageChange}
    >
      <Container align='center' justify='center' w='full' p={4}>
        <Previous>
          <IconPrev />
        </Previous>
        <PageGroup mx={4} />
        <Next>
          <IconNext />
        </Next>
      </Container>
    </Paginator>
  )
})
