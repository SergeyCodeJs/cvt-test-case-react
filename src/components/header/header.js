import React from 'react'
import classes from './header.module.scss'
import Logo from './logo/logo'
import Form from '../ui/form/form'
import Button from '../ui/button/button'
import Input from '../ui/input/input'
import HeaderLogin from './header-login/header-login'

export default function Header() {
    const {header} = classes;
    return (
        <header className={header}>
            <Logo title="Видеосервис"/>
            <Form action="#" onSubmit={function () {
                return
            }}>
                <Input type="text" placeholder="Поиск..."/>
                <Button type="search"/>
            </Form>
            <HeaderLogin/>
        </header>
    )
}
