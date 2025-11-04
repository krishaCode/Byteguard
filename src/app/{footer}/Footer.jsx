import React from 'react'
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
            <a href="#"><i className="lab la-youtube" /></a>
          </li>
          <li>
            <a href="#"><i className="lab la-facebook" /></a>
          </li>
          <li>
            <a href="#"><i className="lab la-instagram" /></a>
          </li>
          <li>
            <a href="#"><i className="lab la-twitter" /></a>
          </li>
          <li>
            <a href="#"><i className="lab la-github" /></a>
          </li>
        </ul>
        <ul className={style.links}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <p className={style.copyright}>
        &copy; <span id="year"></span> ArsenTech | All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer