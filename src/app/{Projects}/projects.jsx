"use client"

import React, { useState } from 'react'
import styles from './projects.module.css'
import PCard from './pCard'

export default function Projects() {
  // sample data; replace or fetch from API as needed
  const cards = [
    { title: 'Project Alpha', date: '01.01.2024', author: 'Team A', summary: 'Short summary A', imgSrc: '/about.png', link: '#' },
    { title: 'Project Beta', date: '02.02.2024', author: 'Team B', summary: 'Short summary B', imgSrc: '/about.png', link: '#' },
    { title: 'Project Gamma', date: '03.03.2024', author: 'Team C', summary: 'Short summary C', imgSrc: '/about.png', link: '#' },
    { title: 'Project Delta', date: '04.04.2024', author: 'Team D', summary: 'Short summary D', imgSrc: '/about.png', link: '#' },
    { title: 'Project Epsilon', date: '05.05.2024', author: 'Team E', summary: 'Short summary E', imgSrc: '/about.png', link: '#' },
  ]

  const PAGE_SIZE = 3
  const [page, setPage] = useState(0)

  const pageCount = Math.ceil(cards.length / PAGE_SIZE)

  const visible = cards.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  return (
    <section>
      <header className={styles.hero}>
        <h1 className={styles.title}>OUR PROJECTS</h1>
      </header>

      <div style={{ padding: '24px' }}>
        <div style={{ display: 'flex', gap: 16, overflow: 'hidden', justifyContent: 'center' }}>
          {visible.map((c, idx) => (
            <div key={idx} style={{ flex: '0 0 320px' }}>
              <PCard {...c} />
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 18 }}>
          <button onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0}>
            Prev
          </button>
          <span>Page {page + 1} / {pageCount}</span>
          <button onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))} disabled={page >= pageCount - 1}>
            Next
          </button>
        </div>
      </div>
    </section>
  )
}