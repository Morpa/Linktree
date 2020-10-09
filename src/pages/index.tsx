import Home, { HomeTemplateProps } from 'templates/Home'
import linksMock from 'components/ButtonLink/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      links: linksMock
    }
  }
}
