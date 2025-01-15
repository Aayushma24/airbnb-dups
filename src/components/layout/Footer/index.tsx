import React from 'react'
import styles from './footer.module.css'
export default function Footer() {

  return (
    <footer>
        <div className={styles.container}> 
            <ul>
                <b> Support</b>
                <li>Help Center</li>
                <li>AirCover</li>
                <li>Anti-discrimination</li>
                <li>Disability support</li>
                <li>Cancellation options</li>
                <li>Report neighborhood concern</li>
            </ul>
            <ul>
                <b> Hosting</b>
                <li>Airbnb your home</li>
                <li>AirCover for hosts </li>
                <li>Hosting resources</li>
                <li>Community forum</li>
                <li>Airbnb-friendly apartments</li>
                <li>Join a free Hosting class</li>
            </ul>
            <ul>
                <b> Airbnb</b>
                <li>Newsroom</li>
                <li>Careers </li>
                <li>Investors</li>
                <li>Gift cards</li>
                <li>Airbnb-friendly apartments</li>
                
            </ul>
        </div>
        <div className={styles.footerLower}>
            &copy;<span>{ new Date().getFullYear()}</span>{" "} Airbnb, Inc.
            
        </div>
      
    </footer>
  )
}
