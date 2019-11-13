import React, { useContext, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Category } from 'typings';
import { fetchArticles } from '../../utils/fetcher';
import { getDateString } from '../../utils/index';
import { DispatchContext, StateContext } from '../context/index';
import { listUpdate } from '../redux/action';
import styles from './index.m.less';

function getCategory(path: string) {
  return path.substring(1) as Category;
}

export default function(props: RouteComponentProps) {
  const { list } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  useEffect(() => {
    const category = getCategory(props.match.path);
    fetchArticles(category)
      .then(response => {
        dispatch(listUpdate(response.data));
      })
      .catch((e: Error) => alert(e.message));
  }, []);
  const { match } = props;
  return (
    <ul className={styles.list}>
      {list.map(({ id, title, updated_at }) => (
        <li key={id}>
          <Link to={`${match.path}/${id}`}>{title}</Link>
          <span>{getDateString(updated_at)}</span>
        </li>
      ))}
    </ul>
  );
}
