import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Icon from '../components/icon';
import Avatar from '../background';
import styles from './index.m.less';

const cx = classNames.bind(styles);

interface IDialogProps {
  avatar?: { src: string; blurSrc: string };
  title?: string;
  description?: string;
  menu?: Array<{ name: string; href: string }>;
  contact?: Array<{ icon: string; href: string }>;
}

const Dialog: React.FunctionComponent<IDialogProps> = ({
  avatar,
  title,
  description,
  menu,
  contact,
}) => {
  const className = cx('dialog');
  return (
    <div className={className}>
      <div className={styles.wrapper}>
        <Avatar wrapperClassName={styles.avatarWrapper} className={styles.avatar} {...avatar} />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      <nav>
        {menu.map(({ name, href }) => (
          <Link key={name} to={href}>
            {name}
          </Link>
        ))}
      </nav>
      <div className={styles.contact}>
        {contact.map(({ icon, href }) => (
          <a key={href} href={href}>
            <Icon name={icon} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dialog;
