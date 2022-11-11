import * as React from 'react'
import { Link , useStaticQuery, graphql} from 'gatsby'
import '../images/styles.css'
import Layout from '../components/layout'
import Seo from '../components/seo'
import {  
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle } from '../components/layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'
// Define  component
const LoginPage = () => {
    return (
      <main>
        <Layout pageTitle="Sign In">
        <form>
                <div class="container">
                    <p>Please fill in this form to create an account.</p>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
                    

                    <button type="submit" class="registerbtn">Register</button>
                </div>

                <div class="container signin">
                    <p>Already have an account? <Link to="/login" className={navLinkText}>Sign In</Link>.</p>
                </div>
            </form>
         </Layout>
    </main>
  )
}


// Export component
export default LoginPage

// Define page 
export const Head = () => <Seo title= "Sign In"/>
