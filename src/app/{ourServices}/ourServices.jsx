import React from 'react'
import Card from './Card'
import styles from './ourServices.module.css'

const sampleText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s.`

const cards = [
  {
    title: 'ABOUT US',
    text: sampleText,
    imgSrc: '/cctv.png',
    textBg: '#2f3640',
    textColor: '#fff'
  },
  {
    title: 'ABOUT US',
    text: sampleText,
    imgSrc: './lock.png',
    reverse: true,
    textBg: '#ffffff',
    textColor: '#111'
  },
  {
    title: 'ABOUT US',
    text: sampleText,
    imgSrc: './network.jpg',
    reverse: false,
    textBg: '#2f3640',
    textColor: '#fff'
  },
  {
    title: 'ABOUT US',
    text: sampleText,
    imgSrc: './wifi.jpg',
    reverse: true,
    textBg: '#ffffff',
    textColor: '#111'
  }
]

export default function ourServices() {
  return (
    <div>
      <header className={styles.hero}>
        <h1 className={styles.title}>OUR SERVICES</h1>
      </header>
      {cards.map((c, i) => (
        <Card
          key={i}
          title={c.title}
          text={c.text}
          imgSrc={c.imgSrc}
          reverse={c.reverse}
          textBg={c.textBg}
          textColor={c.textColor}
        />
      ))}
    </div>
  )
}