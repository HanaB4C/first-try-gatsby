
//  Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
// Define  component
const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <h3>Starting from scratch</h3>
        <StaticImage alt="home"
          src="../images/istockphoto-1303501748-170667a.jpg"/>
      </Layout>
    
  )
}

// Export component
export default IndexPage

// Define page title
export const Head = () => <Seo title= "Home Page" />

