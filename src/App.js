import React from 'react'
import { observer,Provider,inject } from 'mobx-react'
import Router from '@/routers'
import AppStore from '@/stores/app'

@observer
class App extends React.Component{
    render(){
        return (
            <Provider store={AppStore}>
                <Router/>
            </Provider>
        )
    }
}

export default App