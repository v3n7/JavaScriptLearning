import React, { Component } from 'react'
import styles from './User.module.css'

export default class User extends Component {
    render() {
        return (
            <div className={styles.user}>
                <div className={styles.name}>{this.props.name}</div>
                <div className={styles.bonuses}>{this.props.bonuses}</div>
            </div>
        )
    }
}

User.defaultProps = {
    name: "Ф ДАЛИМОВА В. В.",
    bonuses: "Кошелек: 0.00"
}
