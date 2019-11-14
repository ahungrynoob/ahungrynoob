import React from 'react';
import styles from './footer.m.less';

const Footer: React.FunctionComponent = props => (
  <div className={styles.footer}>
    {props.children}
    <span className={styles.baseline} />
    <span>我是有底线的</span>
    <span className={styles.baseline} />
  </div>
);

export default Footer;
