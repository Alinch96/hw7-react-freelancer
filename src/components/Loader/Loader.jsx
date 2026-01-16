import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import styles from './Loader.module.css'

const Loader = () => {
    return (
      <div className={styles.loaderContainer}>
        <InfinitySpin
          width="200"
          color="#ff6b35"
        />
      </div>
    )
}

export default Loader