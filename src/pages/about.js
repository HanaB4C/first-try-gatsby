
//  Import React
import { Link } from 'gatsby'
import * as React from 'react'
import '../images/styles.css'
import Layout from '../components/layout'

// Define  component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Me">
      <h1>Here you'll find some informations about me</h1>
      <table class="center">
    <thead>
        <tr>
            <th colspan="2">About Me</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>First Name</td>
            <td>Hana</td>
        </tr>
        <tr>
            <td>Last Name</td>
            <td>Selmi</td>
        </tr>
        <tr>
            <td>Date Of Birth</td>
            <td>14/04/1995</td>
        </tr>
        <tr>
            <td>Origins</td>
            <td>Jendouba</td>
        </tr>
        <tr>
            <td>Occupation</td>
            <td>Software engineer</td>
        </tr>
    </tbody>
</table>
</Layout>
    </main>
  )
}

// Export component
export default AboutPage

// Define page title
export const Head = () => <title>About Me</title>