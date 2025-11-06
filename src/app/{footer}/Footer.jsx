import React from 'react'
import Link from 'next/link'
import style from './footer.module.css'

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <h2 className={style.logo}>LOGO</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consectetur,
          nisi nulla quis rerum reprehenderit eligendi. Similique veniam quae
          quidem magni, labore minima consequatur laudantium dolore eos
          excepturi, quos officia.
        </p>
        <ul className={style.sm}>
          <li>
            <Link href="#"><i className="lab la-youtube" /></Link>
          </li>
          <li>
            <Link href="#"><i className="lab la-facebook" /></Link>
          </li>
          <li>
            <Link href="#"><i className="lab la-instagram" /></Link>
          </li>
          <li>
            <Link href="#"><i className="lab la-twitter" /></Link>
          </li>
          <li>
            <Link href="#"><i className="lab la-github" /></Link>
          </li>
        </ul>
        <ul className={style.links}>
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">Portfolio</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
      </div>
      <p className={style.copyright}>
        &copy; <span id="year"></span>Byteguard Technology | All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer