import { ActionType, createAction } from 'typesafe-actions';
import { ArticleList } from '../../../config/types';

export const listUpdate = createAction(
  'list/UPDATE',
  (list: ArticleList) => list,
)();

const actions = {
  listUpdate,
};

export default actions;

export type ListAction = ActionType<typeof actions>;

export type RootAction = ListAction;
