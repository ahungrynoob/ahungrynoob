import { getType } from 'typesafe-actions';
import { ArticleList, IItem } from '../../../config/types';
import { listUpdate, RootAction, articleUpdate } from '../action/index';

export const listReducer = (state: ArticleList, action: RootAction) => {
  switch (action.type) {
    case getType(listUpdate):
      return [...action.payload];
    default:
      return state;
  }
};

export const articleReducer = (state: IItem, action: RootAction) => {
  switch (action.type) {
    case getType(articleUpdate):
      return { ...action.payload };
    default:
      return state;
  }
};
