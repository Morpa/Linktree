const GET_LINKS = /* GraphQL */ `
  fragment sectionHeader on LandingPage {
    sectionHeader {
      title
      description
    }
  }

  fragment sectionPublic on LandingPage {
    sectionPublic {
      title
      publicLinks {
        buttonLabel
        buttonLink
      }
    }
  }

  fragment sectionSocial on LandingPage {
    sectionSocial {
      title
      socialLinks {
        buttonLabel
        buttonLink
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...sectionHeader
      ...sectionPublic
      ...sectionSocial
    }
  }
`

export default GET_LINKS
