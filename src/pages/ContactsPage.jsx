import React from 'react'
import styles from './СontactsPage.module.css'

const ContactsPage = () => {
  return (
     <div className={styles.contactsPage}>
            <h2 className={styles.title}>Як нас знайти?</h2>
            <div className={styles.contactInfo}>
              <p className={styles.infoText}>1. Для початку, потрібно дістатися потягом до Ужгорода.</p>
              <p className={styles.infoText}>2. Запитати у баби Галі</p>
              <p className={styles.farewell}>До зустрічі!!!</p>
            </div>
        </div>
  )
}

export default ContactsPage