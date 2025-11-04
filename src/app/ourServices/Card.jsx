import React from 'react'
import styles from './card.module.css'

export default function Card({ title, text, imgSrc, reverse = false, textBg = '#2f3640', textColor = '#fff' }) {
  return (
    <section className={`${styles.card} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.image}>
        <img src={imgSrc} alt={title} />
      </div>
      <div className={styles.text} style={{ background: textBg, color: textColor }}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.body}>{text}</p>
      </div>
    </section>
  )
}
