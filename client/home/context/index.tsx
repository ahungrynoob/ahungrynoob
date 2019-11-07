import React, { Dispatch } from 'react';
import { RootAction } from '../redux/action';
import { ArticleList } from '../../config/types';

interface IState {
  list?: ArticleList;
}

export const StateContext = React.createContext<IState>({});

export const DispatchContext = React.createContext<Dispatch<RootAction>>(null);

export const ShrinkContext = React.createContext(false);
