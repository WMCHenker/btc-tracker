import React from 'react'
import styles from '../styles/Loading.module.scss'

function LoadingPage() {
  return (
    <div className={styles.main}>
      <div className={styles.loading}>
        <h1>Loading data</h1>
        <div class={styles.spinner}>
          <div class={styles.bounce1}></div>
          <div class={styles.bounce2}></div>
          <div class={styles.bounce3}></div>
        </div>
        <h2>please wait, while the essential data is loaded</h2>
      </div>
    </div>
  )
}

export default LoadingPage