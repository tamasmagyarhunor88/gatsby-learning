import * as React from 'react'
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
      <Layout pageTitle="Hunors Gatsby Home Page">
          <p>Hi, I am Hunor and I'm making this by following the Gatsby Tutorial.</p>
          <StaticImage src="https://bringatrailer.com/wp-content/uploads/2020/05/2020_porsche_gt4_158946692401fb71c976a628c37220200429_182312.jpg" alt="Porsche 718 GT4"/>
      </Layout>
  )
}

export default IndexPage