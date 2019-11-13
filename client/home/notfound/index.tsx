import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames/bind';
import notFoundUrl from '../../../app/public/img/notfound.jpeg';
import styles from './index.m.less';

const cx = classNames.bind(styles);

const NotFound: React.FunctionComponent<RouteComponentProps> = props => {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }
  const { staticContext } = props;
  if (staticContext) {
    staticContext.statusCode = 404;
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('box')}>
        <img src={notFoundUrl} alt="notfound" />
        <h1>无可奉告</h1>
        <a onClick={handleClick}>你们也不高兴，那怎么办？</a>
      </div>
    </div>
  );
};

export default NotFound;
