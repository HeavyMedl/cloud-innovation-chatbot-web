import React from 'react';
import styles from './IphoneWrapper.module.css';
import WebChat from '../WebChat/WebChat';

export default () => {
  return (
    <div className={styles.Phone}>
      <div className={styles['Phone-screen']}>
        <div className={styles['Phone-content']}>
          <WebChat />
        </div>
      </div>
    </div>
  );
};
