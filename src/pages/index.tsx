import { GetStaticProps } from 'next'

import Home from 'templates/Home'
import client from 'graphql/client'
import GET_LINKS from 'graphql/queries/getLinks'
import { LinksProps } from 'types/api'

export default function Index({ links }: LinksProps) {
  return <Home {...links} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { links } = await client.request(GET_LINKS)

  console.log(links)

  return {
    props: {
      ...links
    }
  }
}
