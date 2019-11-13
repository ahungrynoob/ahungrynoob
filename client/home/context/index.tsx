import React, { Dispatch, useReducer } from 'react';
import useRootReducer from 'use-root-reducer';
import { RootAction } from '../redux/action';
import { listReducer, articleReducer } from '../redux/reducer';
import { ArticleList, IItem } from '../../config/types';

interface IState {
  list?: ArticleList;
  article?: IItem;
}

export const StateContext = React.createContext<IState>({});

export const DispatchContext = React.createContext<Dispatch<RootAction>>(null);

export const ShrinkContext = React.createContext(false);

export const RootReducerProvider: React.FunctionComponent<IState> = ({
  children,
  list,
  article,
}) => {
  const [state, dispatch] = useRootReducer({
    list: useReducer(listReducer, list || []),
    article: useReducer(articleReducer, article),
  });
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};
