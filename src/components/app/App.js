import React, {Fragment} from 'react';
import Layout from '../../hoc/layout/layout'
import Switcher from '../switcher/switcher'

function App() {
    return (
        <Fragment>
            <Layout>
                <Switcher/>
            </Layout>
        </Fragment>
    );
}

export default App;
