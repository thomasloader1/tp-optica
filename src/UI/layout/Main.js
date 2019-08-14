import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Productos from '../pages/Productos'
import Contacto from '../pages/Contacto'

export default class Main extends Component {
    render() {
        return (
            <main>
                    <Switch>
                        <Route path="/" render={(props)=> <Home {...props}/>} exact/>
                        <Route path="/productos" component={Productos} />
                        <Route path="/contacto" component={Contacto} />
                    </Switch>
            </main>
        )
    }
}
