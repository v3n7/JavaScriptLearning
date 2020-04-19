import React, { Component } from 'react'
import styles from './SearchInput.module.css'

export default class SearchInput extends Component {
    render() {
        return (
            <div className={styles.searchInput}>
                <input type="text" className={styles.input}/>
                <div className={styles.modal}></div>
            </div>
        )
    }
}
