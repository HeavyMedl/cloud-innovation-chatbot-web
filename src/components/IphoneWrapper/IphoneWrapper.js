import React from 'react';
import styles from './IphoneWrapper.module.css';

export default ({ children }) => {
  return (
    <div className={styles.Phone}>
      <div className={styles['Phone-screen']}>
        <div className='Phone-content'>{children}</div>
      </div>
    </div>
  );
};
