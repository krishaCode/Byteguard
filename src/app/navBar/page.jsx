import React from "react";
import styles from "./page.module.css";

export default function Page() {
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
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <div id="icons" className={styles.icons}>
                <img
                    src="https://png.pngtree.com/png-clipart/20230106/ourmid/pngtree-pet-shop-house-png-image_6553432.png"
                    alt=""
                />
            </div>
                
            
            <ul id="links">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <div id="icons">
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/013/083/401/small/search-ui-icon-png.png"
                    alt="search icon"
                    id="search"
                />
                <img
                    src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                    alt="profile icon"
                    id="profile"
                />
            </div>
        </nav>
    );
}
