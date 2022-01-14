module.exports = {
    siteMetadata: {
        title: "Hunor GatsbyJS lrng",
        siteUrl: `https://www.learnhunor.xyz`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            }
        },
    ],
}