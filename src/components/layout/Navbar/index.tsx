'use client'

import Image from "next/image";
import styles from "./navbar.module.css";
import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";

export default function Navbar() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const profileButtonRef = useRef<HTMLButtonElement>(null);
  const [dialogPosition, setDialogPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const toggleModal = () => {
    if (profileButtonRef.current) {
      const rect = profileButtonRef.current.getBoundingClientRect();
      setDialogPosition({ top: rect.bottom, left: rect.left });
    }
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!profileButtonRef.current?.contains(event.target as Node)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar--upper"]}>
        <Image
          width={100}
          height={100}
          src={"/logo.png"}
          alt="logo"
          className={styles.logo}
        />
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
            style={{ top: dialogPosition.top, left: dialogPosition.left }}
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

const DialogList = ({
  style,
}: {
  style: React.CSSProperties;
}) => {
  return (
    <div className={styles.dialogOverlay}>
      <div className={styles.dialog} style={style}>
        <ul>
          <li>Login</li>
          <li>Signup</li>
        </ul>
      </div>
    </div>
  );
};
