import React, { Dispatch, useReducer } from 'react';
import useRootReducer from 'use-root-reducer';
import { RootAction } from '../redux/action';
import { listReducer } from '../redux/reducer';
import { ArticleList } from '../../config/types';

interface IState {
  list?: ArticleList;
}

export const StateContext = React.createContext<IState>({});

export const DispatchContext = React.createContext<Dispatch<RootAction>>(null);

export const ShrinkContext = React.createContext(false);

export const RootReducerProvider: React.FunctionComponent<IState> = ({
  children,
  list,
}) => {
  const [ state, dispatch ] = useRootReducer({
    list: useReducer(listReducer, list || []),
  });
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};
