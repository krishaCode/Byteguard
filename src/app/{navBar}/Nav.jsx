'use client';

import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import styles from "./nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <span id="logo" className={styles.logo}>
                <Image
                    src=""
                    alt="Byteguard"
                    width={40}
                    height={40}
                />
                Byteguard
            </span>
            <ul id="links" className={styles.links}>
                <li><Link href="#">Home</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
            

        </nav>
    );
}
