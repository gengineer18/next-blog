import React from 'react'
import { NextHead, TheBreadcrumb } from '@/components/common/utils/organisms'
import { TPrivacy, TBreadcrumb } from '@/types'
import { GetStaticProps } from 'next'
import { apiKey } from '@/utils/common'
import { ThePrivacy } from '@/components/privacy/organisms'
import { Box } from '@chakra-ui/react'

type Props = {
  privacy: TPrivacy
}

export const getStaticProps: GetStaticProps = async () => {
  const data: TPrivacy = await fetch(`${process.env.API_PATH}/fixed/privacy`, apiKey as RequestInit)
    .then((res) => res.json())
    .catch(() => null)
  return {
    props: {
      privacy: data,
    },
  }
}

const Profile = ({ privacy }: Props): JSX.Element => {
  const breadcrumbs: TBreadcrumb[] = [
    {
      name: 'ホーム',
      path: '/',
    },
    {
      name: 'プライバシーポリシー',
      path: '',
    },
  ]
  return (
    <>
      <NextHead title={`${privacy.title} | Sorellina Coda Official Blog`} />
      <Box my={4}>
        <TheBreadcrumb breadcrumbs={breadcrumbs} />
      </Box>
      <ThePrivacy privacy={privacy} />
    </>
  )
}

export default Profile
