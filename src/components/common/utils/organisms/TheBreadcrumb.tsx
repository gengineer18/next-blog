import React from 'react'
import { TBreadcrumb } from '@/types'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

type Props = {
  breadcrumbs: TBreadcrumb[]
}

export const TheBreadcrumb: React.FC<Props> = ({ breadcrumbs }) => (
  <Breadcrumb separator='>' fontWeight='medium' fontSize='sm'>
    {breadcrumbs.map((item, index, array) =>
      array.length - 1 === index ? (
        <BreadcrumbItem isCurrentPage key={item.path}>
          <BreadcrumbLink>{item.name}</BreadcrumbLink>
        </BreadcrumbItem>
      ) : (
        <BreadcrumbItem>
          <BreadcrumbLink href={item.path} key={item.path}>
            {item.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      )
    )}
  </Breadcrumb>
)
