import React from 'react'
import { NextHead } from '@/components/common/utils/organisms/NextHead'
import { TPrivacy } from '@/types'
import { GetStaticProps } from 'next'
import { apiKey } from '@/utils/common'
import { ThePrivacy } from '@/components/privacy/organisms'

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

const Profile = ({ privacy }: Props): JSX.Element => (
  <>
    <NextHead title={`${privacy.title} | Sorellina Coda Official Blog`} />
    <ThePrivacy privacy={privacy} />
  </>
)

export default Profile
