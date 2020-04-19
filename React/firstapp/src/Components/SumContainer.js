import React, { Component } from 'react'
import SumInfo from './Shared/SumInfo'
import styles from './SumContainer.module.css'

export default class SumContainer extends Component {
    render() {
        return (
            <div className={styles.sumContainer}>
                <SumInfo label="Сумма к оплате" value="345.60"/>
                <SumInfo label="Получено" value="0.00"/>
                <SumInfo label="Сдача" value="0.00"/>
                <SumInfo label="Бонус" value="0.00"/>
            </div>
        )
    }
}
