import React, { Component } from 'react'
import Statuses from './Shared/Statuses.js'
import User from './Shared/User.js'
import HeaderLeftContainer from './HeaderLeftContainer.js'
import styles from './Header.module.css'

export default class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <HeaderLeftContainer />
                <Statuses />
                <User />    
            </header>
        )
    }
}
