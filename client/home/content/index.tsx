import React, { Fragment, useState } from 'react';
import classNames from 'classnames/bind';
import Icon from '../components/icon';
import Avatar from '../background';
import styles from './index.m.less';
import config from '../../config';

const cx = classNames.bind(styles);

const Content: React.FunctionComponent<any> = (props) => {
  const [ shrink, setShrink ] = useState(false);
  function toggleShrink() {
    setShrink(!shrink);
  }

  const panelCls = cx(
    {
      shrink,
    },
    'panel',
  );
  return (
    <Fragment>
      <div className={panelCls}>
        <div>
          <div className={styles.wrapper}>
            <Avatar
              wrapperClassName={styles.avatarWrapper}
              className={styles.avatar}
              {...{
                blurSrc: `${config.user.avatar}?s=40&v=4`,
                src: `${config.user.avatar}?s=460&v=4`,
              }}
            />
          </div>
          <h1>{config.user.name}</h1>
          <p>{config.user.description}</p>
          <div className={styles.contact}>
            {config.user.contact.map(({ icon, href }) => {
              return (
                <a key={href} href={href}>
                  <Icon name={icon} />
                </a>
              );
            })}
          </div>
        </div>
        <div onClick={toggleShrink} className={cx('toggle')}>
          <Icon name={shrink ? 'angle-right' : 'angle-left'} />
        </div>
      </div>
      <div className={cx('main')}>this is main</div>
    </Fragment>
  );
};

export default Content;
