import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import NavbarPage from '../../aux-components/NavbarPage'

class Header extends Component {
    render() {
        let { links } = this.props
        return (
            <Fragment>
                <NavbarPage/>
            </Fragment>
        )
    }
}


export default connect(store =>({
    links : store.links
}))(Header)
