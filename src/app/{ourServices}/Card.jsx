import React from 'react'
import styles from './card.module.css'

export default function Card({ title, text, imgSrc, reverse = false, textBg = '#2f3640', textColor = '#fff' }) {
  return (
    <section className={`${styles.card} ${reverse ? styles.reverse : ''}`}>
      {/* Decorative background image so all cards crop consistently */}
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imgSrc})` }}
        role="img"
        aria-label={title}
      />

      <div className={styles.text} style={{ background: textBg, color: textColor }}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.body}>{text}</p>
      </div>
    </section>
  )
}
