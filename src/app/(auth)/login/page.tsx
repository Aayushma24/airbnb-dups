'use client'

import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic form validation
    if (!email || !password) {
      setError('Please fill in all fields.')
      return
    }

    // Simulate login request
    setError('')
    console.log('Logging in with:', { email, password })
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <img className={styles.logo} src="/logo.png" alt="Logo" />
        <h2 className={styles.title}>Welcome back to Airbnb!</h2>
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
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className={styles.submitButton}>Log In</button>
        </form>

        <div className={styles.footer}>
          <p className={styles.footerText}>New to Airbnb?</p>
          <Link href={"/signup"} className={styles.linkButton}>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}
