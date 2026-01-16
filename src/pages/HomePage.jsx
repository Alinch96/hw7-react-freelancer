import React from 'react'
import styles from './Home.module.css'

const HomePage = () => {
  return (
   <div className={styles.homePage}>
            <h2 className={styles.title}>Цей магазин належить програмісту на фрілансі</h2>
            <p className={styles.description}>Тому:</p>
            <ol className={styles.list}>
                <li className={styles.listItem}>Магазин працює коли хоче</li>
                <li className={styles.listItem}>Товари надсилає швидко</li>
                <li className={styles.listItem}>На запитання відповідає коли висипається</li>
            </ol>
        </div>
  )
}

export default HomePage