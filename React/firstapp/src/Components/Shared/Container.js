import React, { Component } from 'react';
import Header from '../Header';
import styles from './Container.module.css'

export default class Container extends Component {
    render() {
        return (
        <div className={styles.container}>
            <Header />
        </div>
        );
    }
}
