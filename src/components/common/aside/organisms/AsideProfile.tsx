import { Text, Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { AsideBox } from '../molecules'

export const AsideProfile: React.FC = () => (
  <AsideBox title='プロフィール'>
    <Text fontWeight='bold' mb={3} textAlign='center'>
      妹尾 弦(せのお げん)
    </Text>
    <Text mb={3}>フリーランスでフロントエンドの技術を中心に扱うエンジニアです。</Text>
    <Text mb={3}>React, Next.js, TypeScriptが好きです。</Text>
    <Text mb={3}>バックエンドはHasura GraphQL Engineに注目し、勉強中です。</Text>
    <Text mb={3}>
      ブログではフロントエンドにまつわるあれこれ、フリーランスとしての働き方、マネーリテラシーなどの生活をより豊かにするTipsなどを書いていきます。
    </Text>

    <Flex justifyContent='center' py={3}>
      <Link href='/profile'>
        <Button fontSize='sm'>プロフィールはこちらから</Button>
      </Link>
    </Flex>
  </AsideBox>
)
