import React, {Fragment} from 'react'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'

export default(props) => {
    return (
        <Fragment>
            <Header/>
            <main className="main">
                {props.children}
            </main>
            <Footer/>
        </Fragment>
    )
}