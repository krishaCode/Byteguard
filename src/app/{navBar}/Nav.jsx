'use client';

import React from "react";
import styles from "./nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <span id="logo" className={styles.logo}>
                <img
                    src="https://png.pngtree.com/png-clipart/20230106/ourmid/pngtree-pet-shop-house-png-image_6553432.png"
                    alt=""
                />
                WePet
            </span>
            <ul id="links" className={styles.links}>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            

        </nav>
    );
}
