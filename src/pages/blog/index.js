import * as React from 'react'
import Layout from "../../components/layout"
import { graphql } from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx"

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My non existing Blog posts">
            <ul>
                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <h2>{node.frontmatter.title}</h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <p>Last updadted: {node.parent.modifiedTime}</p>
                            <MDXRenderer>
                                {node.body}
                            </MDXRenderer>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    date(formatString: "DD MMMM, YYYY")
                    title
                }
                id
                body
                parent {
                    ... on File {
                        modifiedTime(formatString: "DD MMMM, YYYY")
                    }
                }
            }
        }
    }
`

export default BlogPage