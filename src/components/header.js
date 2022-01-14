import * as React from 'react'
import { useStaticQuery, graphql} from "gatsby"

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header>
            <h1>{ data.site.siteMetadata }</h1>
        </header>
    )
}

export default Header