import React from 'react'
import { TBreadcrumb } from '@/types'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@chakra-ui/react'

type Props = {
  breadcrumbs: TBreadcrumb[]
}

export const TheBreadcrumb: React.FC<Props> = ({ breadcrumbs }) => (
  <Breadcrumb separator='>' fontWeight='medium' fontSize='sm'>
    {breadcrumbs.map((item, index, array) =>
      array.length - 1 === index ? (
        <BreadcrumbItem isCurrentPage key={item.path}>
          {item.icon && <Icon mr={2} as={item.icon} />}
          <BreadcrumbLink>{item.name}</BreadcrumbLink>
        </BreadcrumbItem>
      ) : (
        <BreadcrumbItem key={item.path}>
          {item.icon && <Icon mr={2} as={item.icon} />}
          <BreadcrumbLink href={item.path}>{item.name}</BreadcrumbLink>
        </BreadcrumbItem>
      )
    )}
  </Breadcrumb>
)
