import React, { Fragment, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import classNames from 'classnames/bind';
import { NavLink, Switch, Route, useLocation } from 'react-router-dom';
import { ShrinkContext } from '../context';
import Footer from './footer';
import List from '../list';
import Article from '../article';
import Icon from '../components/icon';
import Avatar from '../background';
import styles from './index.m.less';
import transitionStyles from './transition.m.less';
import config from '../../config';

const cx = classNames.bind(styles);

const Content: React.FunctionComponent<any> = () => {
  const [shrink, setShrink] = useState(false);
  const location = useLocation();
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
      <ShrinkContext.Provider value={shrink}>
        <div className={panelCls}>
          <div>
            <div className={cx('wrapper')}>
              <Avatar
                wrapperClassName={styles.avatarWrapper}
                className={cx('avatar')}
                {...{
                  blurSrc: `${config.user.avatar}?s=40&v=4`,
                  src: `${config.user.avatar}?s=460&v=4`,
                }}
              />
            </div>
            <h1>{config.user.name}</h1>
            <p>{config.user.description}</p>
            <div className={cx('contact')}>
              {config.user.contact.map(({ icon, href }) => (
                <a key={href} href={href}>
                  <Icon name={icon} />
                </a>
              ))}
            </div>
          </div>
          <div onClick={toggleShrink} className={cx('toggle')}>
            <Icon name={shrink ? 'angle-right' : 'angle-left'} />
          </div>
        </div>
        <div className={cx('main')}>
          <div className={cx('content')}>
            <nav>
              {config.menu.map(({ name, href }) => (
                <NavLink key={name} to={href}>
                  {name}
                </NavLink>
              ))}
            </nav>
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={500} classNames={{ ...transitionStyles }}>
                <Switch location={location}>
                  <Route
                    path={['/work/:id', '/thought/:id', '/life/:id']}
                    extact
                    component={Article}
                  />
                  <Route path={['/work', '/thought', '/life']} extact component={List} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
          <Footer />
        </div>
      </ShrinkContext.Provider>
    </Fragment>
  );
};

export default Content;
