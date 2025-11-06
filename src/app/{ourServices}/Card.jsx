import React from 'react'
import Image from 'next/image'
import styles from './card.module.css'

export default function Card({ title, text, imgSrc, reverse = false, textBg = '#2f3640', textColor = '#fff' }) {
  return (
    <section className={`${styles.card} ${reverse ? styles.reverse : ''}`}>
      
      <div
        className={styles.image}
        role="img"
        aria-label={title}
      >
        <Image src={imgSrc} alt={title} fill className={styles.img} />
      </div>

      <div className={styles.text} style={{ background: textBg, color: textColor }}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.body}>{text}</p>
      </div>
    </section>
  )
}
