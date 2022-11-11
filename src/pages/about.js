
//  Import React
import * as React from 'react'
import '../images/styles.css'
import {position, positionn} from '../images/styles.css'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
// Define  component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Me">
      <h1>Here you'll find some informations about me</h1>
      
      <div className={position}>
        <div className={positionn}>
          <table class="center">
            <thead>
              <tr>
                <th colspan="2">
                <StaticImage class ="center" alt="a pic of me"
            src="../images/Mon projet.jpg"/></th>
              
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
        </div>
        </div>
        </Layout>
    </main>
  )
}

// Export component
export default AboutPage

// Define page title
export const Head = () => <Seo title= "About Me"/>