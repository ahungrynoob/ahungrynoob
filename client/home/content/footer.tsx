import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
import Avatar from '../background';
import Icon from '../components/icon';
import styles from './footer.m.less';

const Footer: React.FunctionComponent = () => (
  <div className={styles.footer}>
    <Link className={styles.wrapper} to="/">
      <div className={styles.small}>
        <Avatar
          wrapperClassName={styles.avatarWrapper}
          className={styles.avatar}
          {...{
            blurSrc: `${config.user.avatar}?s=40&v=4`,
            src: `${config.user.avatar}?s=460&v=4`,
          }}
        />
      </div>
    </Link>
    <div className={styles.contact}>
      {config.user.contact.map(({ icon, href }) => (
        <a key={href} href={href}>
          <Icon name={icon} />
        </a>
      ))}
    </div>
    <div className={styles.baseline}>
      <span />
      <span>我是有底线的</span>
      <span />
    </div>
  </div>
);

export default Footer;
