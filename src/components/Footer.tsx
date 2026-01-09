import LogoSvg from '../assets/svg/logo-email.svg?react'

import "../styles/Footer.css"
import "../App.css"

export default function Footer() {
    return (
        <div className="parent-container">
            <footer className="footer-container">
                <h3 className='contact-header'>Contact me</h3>
                <div className="contact-container">
                    <LogoSvg className="email-logo"/>
                    <p className="email-text">henryovag@hotmail.com</p>
                </div>
            </footer>
        </div>
    )
}