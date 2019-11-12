import { getType } from 'typesafe-actions';
import { ArticleList } from '../../../config/types';
import actions, { RootAction } from '../action/index';

export const listReducer = (state: ArticleList, action: RootAction) => {
  switch (action.type) {
    case getType(actions.listUpdate):
      return [ ...action.payload ];
    default:
      return state;
  }
};
