'use client'

import React, { useState } from 'react'
import styles from './page.module.css'
import {useRouter} from 'next/router'
import Link from 'next/link'
export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string>('')

  const handleLoginClick= () =>{
    
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError('All fields are required.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setError('')
    console.log('Signing up with:', { email, password })
    // Call your API or authentication service here
  }

  return (
    <div className={styles.container}>
      <div className={styles.signUpBox}>
        <img className={styles.logo} src="/logo.png" alt="Logo" />
        <h2 className={styles.title}>Join Airbnb</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Create your password"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={styles.input}
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" className={styles.submitButton}>Sign Up</button>
        </form>

        <div className={styles.footer}>
          <p className={styles.footerText}>Already have an account?</p>
          <Link href={"/login"} className={styles.linkButton}>Log In</Link>
        </div>
      </div>
    </div>
  )
}
