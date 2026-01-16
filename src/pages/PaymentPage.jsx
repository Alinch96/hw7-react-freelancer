import React from 'react'
import styles from './Payment.module.css'

const PaymentPage = () => {
  return (
     <div className={styles.paymentPage}>
            <h2 className={styles.title}>Правила оплати</h2>
            <div className={styles.paymentList}>
              <p className={styles.paymentOption}>При отриманні</p>
              <p className={styles.paymentOption}>Переказ на картку</p>
              <p className={styles.paymentOption}>Записати у зошит</p>
            </div>
        </div>
  )
}

export default PaymentPage