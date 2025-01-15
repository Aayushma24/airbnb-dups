'use client'

import Image from "next/image";
import styles from "./navbar.module.css";
import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { useRouter } from 'next/navigation';  // Import the useRouter hook
import Link from "next/link";

export default function Navbar() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const profileButtonRef = useRef<HTMLButtonElement>(null);
  const [dialogPosition, setDialogPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const router = useRouter();  // Initialize the router

  const toggleModal = () => {
    if (profileButtonRef.current) {
      const rect = profileButtonRef.current.getBoundingClientRect();
      setDialogPosition({ top: rect.bottom, left: rect.left });
    }
    setShowModal((prev) => !prev);
  };

  const navigateToLogin = () => {
    console.log("login")
    router.push('/login');  // Navigate to the login page
  };

  const navigateToSignup = () => {
    router.push('/signup');  // Navigate to the signup page
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close the modal if click is outside of the profile button or dialog
      if (!profileButtonRef.current?.contains(event.target as Node) && !dialogRef.current?.contains(event.target as Node)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Create a ref for the dialog
  const dialogRef = useRef<HTMLDivElement>(null);

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar--upper"]}>
       <Link href={"/"}>
       <Image
          width={100}
          height={100}
          src={"/logo.png"}
          alt="logo"
          className={styles.logo}
        />
       </Link>
        <div>
          <ul className={styles.options}>
            <li>Stays</li>
            <li>Experiences</li>
          </ul>
        </div>
        <button
          ref={profileButtonRef}
          onClick={toggleModal}
          className={styles.profile}
        >
          <GiHamburgerMenu size={18} />
          <FaCircleUser size={28} />
        </button>
        {showModal && (
          <DialogList
            ref={dialogRef}  // Pass the ref to the DialogList component
            style={{ top: dialogPosition.top, left: dialogPosition.left }}
            onLoginClick={navigateToLogin}  
            onSignupClick={navigateToSignup} 
          />
        )}
      </div>

      <ul className={styles["navbar--lower"]}>
        <li>
          <div>
            <b>Where</b>
            <span>Search Destination</span>
          </div>
        </li>
        <li style={{ fontSize: "2rem" }}>|</li>
        <li>
          <div>
            <b>Date</b>
            <span>Add Dates</span>
          </div>
        </li>
        <li style={{ fontSize: "2rem" }}>|</li>
        <li>
          <div>
            <b>Who</b>
            <span>Add Guests</span>
          </div>
        </li>
        <button className={styles.searchButton}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </ul>
    </nav>
  );
}

const DialogList = React.forwardRef<HTMLDivElement, {
  style: React.CSSProperties;
  onLoginClick: () => void;
  onSignupClick: () => void;
}>(({ style, onLoginClick, onSignupClick }, ref) => {
  return (  
    <div className={styles.dialogOverlay}>
      <div
        ref={ref}  // Attach the ref to the dialog div
        className={styles.dialog}
        style={style}
        onClick={(e) => e.stopPropagation()}  // Prevent click propagation to close the modal
      >
        <ul>
          <li
            onClick={() => {
              console.log("Login clicked");
              onLoginClick();
            }}
          >
            Login
          </li>
          <li
            onClick={() => {
              console.log("Signup clicked");
              onSignupClick();
            }}
          >
            Signup
          </li>
        </ul>
      </div>
    </div>
  );
})

DialogList.displayName = "DialogList";  // Necessary to display the ref

