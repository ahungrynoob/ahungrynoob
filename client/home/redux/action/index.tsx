import { ActionType, createAction } from 'typesafe-actions';
import { ArticleList, IItem } from '../../../config/types';

export const listUpdate = createAction('list/UPDATE', (list: ArticleList) => list)();

export const articleUpdate = createAction('article/UPDATE', (article: IItem) => article)();

const actions = {
  listUpdate,
  articleUpdate,
};

export default actions;

export type RootAction = ActionType<typeof actions>;
