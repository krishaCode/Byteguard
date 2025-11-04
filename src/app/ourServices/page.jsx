import React from 'react'
import Card from './Card'
import styles from './page.module.css'

const sampleText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`

const cards = [
  {
    title: 'ABOUT US',
    text: sampleText,
    imgSrc: 'https://images.unsplash.com/photo-1581091014514-6a0a1c6b6a0f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1',
    reverse: false,
    textBg: '#2f3640',
    textColor: '#fff'
  },
  {
    title: 'ABOUT US',
    text: sampleText,
    imgSrc: 'https://images.unsplash.com/photo-1517244683847-3a1d6f1e8f2a?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2',
    reverse: true,
    textBg: '#ffffff',
    textColor: '#111'
  },
  {
    title: 'ABOUT US',
    text: sampleText,
    imgSrc: 'https://images.unsplash.com/photo-1581092334436-8f8b4f51d3e8?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3',
    reverse: false,
    textBg: '#2f3640',
    textColor: '#fff'
  }
]

export default function Page() {
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