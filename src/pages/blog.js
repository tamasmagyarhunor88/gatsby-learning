import * as React from 'react'
import Layout from "../components/layout"
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My non existing Blog posts">
            <ul>
                {
                    data.allFile.nodes.map(node =>(
                        <li key={node.name}>{node.name}</li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
            nodes {
                name
                sourceInstanceName
            }
        }
    }
`

export default BlogPage