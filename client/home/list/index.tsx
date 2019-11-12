import React, { useContext, Dispatch } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { PayloadAction } from 'typesafe-actions';
import { StateContext, DispatchContext } from '../context/index';
import { listUpdate } from '../redux/action';
import { getDateString } from '../../utils/index';
import { fetchArticles } from '../../utils/fetcher';
import { ArticleList, IItem } from '../../config/types';
import styles from './index.m.less';
import { Category } from 'typings';

type ListProps = {
  data?: ArticleList;
  dispatch: Dispatch<PayloadAction<'list/UPDATE', IItem[]>>;
} & RouteComponentProps;

class List extends React.Component<ListProps> {
  getCategory(path: string) {
    return path.substring(1) as Category;
  }

  fetchData = (category: Category) => {
    fetchArticles(category)
      .then((response) => {
        this.props.dispatch(listUpdate(response.data));
      })
      .catch((e) => alert(e));
  }

  // UNSAFE_componentWillReceiveProps(nextProps: ListProps) {
  //   if (nextProps.match.path !== this.props.match.path) {
  //     //  切换tab
  //     const categroy = this.getCategory(nextProps.match.path);
  //     this.fetchData(categroy);
  //   }
  // }

  componentDidMount() {
    const categroy = this.getCategory(this.props.match.path);
    this.fetchData(categroy);
  }

  render() {
    const { match, data } = this.props;
    return (
      <ul className={styles.list}>
        {data.map(({ id, title, updated_at }) => {
          return (
            <li key={id}>
              <Link to={`${match.path}/${id}`}>{title}</Link>
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
  const dispatch = useContext(DispatchContext);
  return <List {...props} data={list} dispatch={dispatch} />;
}
