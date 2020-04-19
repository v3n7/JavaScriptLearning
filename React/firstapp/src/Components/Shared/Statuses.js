import React, { Component } from "react";
import styles from "./Statuses.module.css"

export default class Statuses extends Component {
  render() {
    return (
      <div className={styles.statuses}>
        <div className={ [styles.statusInfo, styles.statusInfoActive].join(' ') }>
          {this.props.infoStatus}
        </div>
        <div className={styles.statusInfo}>{this.props.robotStatus}</div>
        <div className={styles.statusInfo}>{this.props.ofdStatus}</div>
      </div>
    );
  }
}

Statuses.defaultProps = {
  infoStatus: "подключен",
  robotStatus: "робот подключен",
  ofdStatus: "офд: все документы отправлены",
};
