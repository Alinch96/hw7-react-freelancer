import React from 'react'
import { Link } from 'react-router'
import styles from './NotFound.module.css'

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Сторінку не знайдено</p>
      <Link to="/" className={styles.homeLink}>
        Повернутися на головну
      </Link>
    </div>
  )
}

export default NotFoundPage