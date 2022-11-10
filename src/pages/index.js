
//  Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
// Define  component
const IndexPage = () => {
  return (
    <main>
    
      {/*<h1>Welcome to my first try for a Gatsby site!</h1>
      <Link to="/about"> About Me</Link>*/}
      <Layout pageTitle="Home Page">
      <h3>Starting from scratch.</h3>
      </Layout>
    </main>
  )
}

// Export component
export default IndexPage

// Define page title
export const Head = () => <title>Home Page</title>

