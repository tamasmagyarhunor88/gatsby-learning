import * as React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
      <main>
          <title>GatsbyJS Hunor ltd</title>
          <h1>Welcome to Hunors Gatsby site!</h1>
          <Link to="/about">About</Link>
          <p>I'm making this by following the Gatsby Tutorial.</p>
      </main>
  )
}

export default IndexPage