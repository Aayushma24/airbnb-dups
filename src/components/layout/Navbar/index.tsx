import Image from "next/image"
import styles from "./navbar.module.css"
import React from 'react'
import { FaHamburger, FaUserTag } from "react-icons/fa"
import { FaCircleUser } from "react-icons/fa6"
import { GiHamburgerMenu } from "react-icons/gi"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles["navbar--upper"]}>
        <Image width={100} height={100} src={'/logo.png'} alt="logo" className={styles.logo} />
        <div> 
          <ul className={styles.options}>
            <li>Stays</li>
            <li>Experiences</li>
          </ul>
        </div>
        <div className={styles.profile}>
          <GiHamburgerMenu size={18} />
          <FaCircleUser size={28}/>
        </div>
        </div>
        <ul className={styles["navbar--lower"]}>
          <li><div>
            <b>Where</b><span>Search Destination</span>
            </div></li>
          <li style={{
            fontSize:'2rem'
          }}>|</li>
          <li><div>
            <b> Date</b><span>Add Dates </span>
            </div></li>
            <li style={{
            fontSize:'2rem'
          }}>|</li>
          <li><div>
            <b>Who</b><span>Add guests</span>
          </div>
          </li>
          <button className={styles.searchButton}>
          <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </ul>
        
    </nav>
    
  )
}
