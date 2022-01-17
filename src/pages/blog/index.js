import * as React from 'react'
import Layout from "../../components/layout"
import { Link, graphql } from "gatsby"

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My non existing Blog posts">
            <ul>
                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <h2>
                                <Link to={`/blog/${node.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            </h2>
                            <p>Posted: {node.frontmatter.date}</p>
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
                slug
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