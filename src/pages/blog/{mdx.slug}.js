import * as React from 'react'
import Layout from '../../components/layout'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image)

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>Posted: {data.mdx.frontmatter.date}</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
            <GatsbyImage
                alt={data.mdx.frontmatter.hero_image_alt}
                image={image}/>
            <p>
                Photo Credit:{" "}
                <a href={data.mdx.frontmatter.hero_image_credit_link}>
                    {data.mdx.frontmatter.hero_image_credit_text}
                </a>
            </p>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            body
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`

export default BlogPost