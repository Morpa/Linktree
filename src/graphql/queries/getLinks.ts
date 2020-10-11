const GET_LINKS = /* GraphQL */ `
  query GET_LINKS {
    links(sort: "created_at:DESC") {
      buttonLabel
      buttonLink
      icon
      category
    }
  }
`

export default GET_LINKS
