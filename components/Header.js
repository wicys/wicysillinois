import React from "react";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <React.Fragment>
    <header className="header-main">
          <nav>
            <ul className="nav-style">
                <li><a className="hvr-float wicys-green" href="/">Home</a></li>
                <li><a className="hvr-float wicys-green" href="/events">Events</a></li>
                <li><a className="hvr-float wicys-green" href="/board">Board</a></li>
                <li><a className="hvr-float wicys-green" href="/contact">Contact</a></li>
                <li><a className="hvr-float wicys-green" href="/corporate">Corporate</a></li>
            </ul>
          </nav>
        </header>
  </React.Fragment>
  )
}
