import React, { Component } from 'react'
import styles from './SumInfo.module.css'

export default class SumInfo extends Component {
    render() {
        return (
            <div className={styles.sumInfo}>
                <div className={styles.label}>{this.props.label}</div>
                <div className={styles.value}>{this.props.value}</div>                
            </div>
        )
    }
}

SumInfo.defaultProps = {
    label: "Неопределено",
    value: "0.00"
}
