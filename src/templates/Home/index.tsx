import { Linkedin, Github, Twitter } from '@styled-icons/boxicons-logos'

import ButtonLink from 'components/ButtonLink'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Main from 'components/Main'
import { HomePageProps } from 'types/api'

import * as S from './styles'

const icons = {
  github: <Github />,
  linkedin: <Linkedin />,
  twitter: <Twitter />
}

const Home = ({ links }: HomePageProps) => (
  <Container>
    <Main />

    <S.SectionLinks>
      <Heading lineLeft lineColor="secondary">
        Interesting links
      </Heading>

      {links.map((a) => (
        <div>{a.buttonLabel}</div>
      ))}

      {/* {links!
        .filter((links) => {
          return links.category === 'Social'
        })
        .map((link) => (
          <ButtonLink
            key={link.buttonLabel}
            buttonLabel={link.buttonLabel}
            buttonLink={link.buttonLink}
          />
        ))} */}
    </S.SectionLinks>

    <S.SectionLinks>
      <Heading lineLeft lineColor="secondary">
        My social medias
      </Heading>

      {/*  {links!
        .filter((links) => {
          return links.category === 'Public'
        })
        .map((link) => (
          <ButtonLink
            key={link.buttonLabel}
            buttonLabel={link.buttonLabel}
            buttonLink={link.buttonLink}
            icon={icons[link.icon]}
          />
        ))} */}
    </S.SectionLinks>
  </Container>
)

export default Home
