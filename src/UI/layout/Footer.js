import React, { Component, Fragment } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className="navbar fixed-bottom navbar-light bg-light">
                     <a className="navbar-brand" href="#">Footer</a> 
                     <p>&copy; Copyright - 2019</p>
                </footer>
            </Fragment>
        )
    }
}
