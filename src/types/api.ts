export type SectionHeaderProps = {
  name: string
  url: string
  alternativeText: string
  title: string
  description: string
}

export type PublicLink = {
  buttonLabel: string
  buttonLink: string
}

export type SectionPublicProps = {
  title: string
  publicLinks: PublicLink[]
}

export type SocialLink = {
  icon: string
  buttonLabel: string
  buttonLink: string
}

export type SectionSocialProps = {
  title: string
  socialLinks: SocialLink[]
}

export type LandingPageProps = {
  sectionHeader: SectionHeaderProps
  sectionPublic: SectionPublicProps
  sectionSocialProps: SectionSocialProps
}
