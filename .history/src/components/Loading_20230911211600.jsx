import React from 'react';
import styles from '../css/Loading.module.css';
import spinner from '../asset/spinner.gif';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <img src={spinner} alt="로딩중" />
      <div>잠시만 기다려주세요</div>
    </div>
  );
}
