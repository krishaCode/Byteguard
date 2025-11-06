import React from 'react'
import Image from 'next/image'
import styles from './aboutUs.module.css'

export default function AboutUs() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.title}>ABOUT US</h1>
        <p className={styles.lead}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
      </div>

      <div className={styles.right}>
        <div className={styles.imgWrap}>
          <Image
            src="/about.png"
            alt="about"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.img}
            priority
          />
        </div>
      </div>
    </section>
  )
}