import React from 'react'
import logo from '../../assets/images/footer-logo.png'
import classes from './footer.module.scss'

export default function Footer() {
    const {footer, footer__logo, footer__address, footer__phones, footer__site} = classes;

    return (
        <footer className={footer}>
            <img className={footer__logo} src={logo} alt="footer-logo"></img>
            <div>
                <div className={footer__address}>426057, Россия, Удмуртская Республика, г.
                    Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</div>
                <div className={footer__phones}>
                    <a href="tel:+7(3412)938861">+7 (3412) 93-88-61,</a>
                    <a href="tel:+7(3412)432929">
                        43-29-29</a>
                </div>
                <a className={footer__site} href="https://htc-cs.ru">htc-cs.ru</a>
            </div>
        </footer>
    )
}
