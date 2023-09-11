import React from 'react';
import styles from '';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <img src={spinner} alt="로딩중" />
      <p>잠시만 기다려주세요</p>
    </div>
  );
}
