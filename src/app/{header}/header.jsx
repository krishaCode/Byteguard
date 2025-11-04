import React from 'react'
import style from './header.module.css'

function header() {
  return (
    <section className={style.heroAbout}>
        <div className={style.content}>
          <h1>SMART SECURITY SYSTEM<br/>FOR THE MODERN WORLD</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a
          </p>
          <a className={style.cta} href="#contact">CONTACT US</a>
        </div>
        <div className={style.visual} aria-hidden="true" />
      </section>

  )
}

export default header