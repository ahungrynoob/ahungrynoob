import React, { useContext } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { StateContext } from '../context/index';
import { getDateString } from '../../utils/index';
import { ArticleList } from '../../config/types';
import styles from './index.m.less';

interface IListProps {
  data?: ArticleList;
}

class List extends React.Component<
  IListProps & RouteComponentProps,
  IListProps
> {
  readonly state = {
    data: this.props.data,
    showList: false,
  };

  getMenu = () => {
    return this.props.match.path.substring(1);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // 切换tab的时候，判断下pathname是否一致，如果不一致就去拉数据
  }

  componentDidMount() {
    // 如果没有数据就去拉数据，有数据的话是服务端渲染就直接渲染
  }

  public render() {
    const {
      data,
      match: { path },
    } = this.props;
    return (
      <ul className={styles.list}>
        {data.map(({ id, title, updated_at }) => {
          return (
            <li key={id}>
              <Link to={`${path}/${id}`}>{title}</Link>
              <span>{getDateString(updated_at)}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default function(props: RouteComponentProps) {
  const { list } = useContext(StateContext);
  return <List {...props} data={list} />;
}
