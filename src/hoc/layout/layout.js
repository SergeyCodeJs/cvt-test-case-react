import React, {Fragment} from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

export default(props) => {
    return (
        <Fragment>
          <Header />
            <main>
                {props.children}
            </main>
          <Footer />
        </Fragment>
    )
}