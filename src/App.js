import React from 'react'
import { observer,Provider } from 'mobx-react'
import Router from '@/routers'
import * as allStore from '@/stores'

@observer
class App extends React.Component{
    render(){
        return (
            <Provider {...allStore}>
                <Router/>
            </Provider>
        )
    }
}

export default App