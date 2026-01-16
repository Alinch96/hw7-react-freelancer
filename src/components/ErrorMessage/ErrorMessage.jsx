import React from 'react'
import styles from './ErrorMessage.module.css'

const ErrorMessage = ({message}) => {
  return (
    <div className={styles.errorMessage}>
      <span className={styles.errorIcon}>⚠️</span>
      <span className={styles.errorText}>Error: {message}</span>
    </div>
  )
}

export default ErrorMessage