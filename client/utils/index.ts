import { Reducer, ReducerState, Dispatch, ReducerAction } from 'react';

function doubleDigit(num: number) {
  if (num >= 10) {
    return num;
  }
  return '0' + num;
}

export function getDateString(time: string) {
  const realTime = new Date(time);
  const y = realTime.getFullYear();
  const month = doubleDigit(realTime.getMonth() + 1);
  const d = doubleDigit(realTime.getDate());
  const h = doubleDigit(realTime.getHours());
  const minutes = doubleDigit(realTime.getMinutes());
  const s = doubleDigit(realTime.getSeconds());
  return `${y}-${month}-${d} ${h}:${minutes}:${s}`;
}

let useRootReducerDispatch = null;

interface IReducerMap<A> {
  [key: string]: [
    ReducerState<Reducer<any, A>>,
    Dispatch<ReducerAction<Reducer<any, A>>>
  ];
}

type RootReduceAction<T> = T extends IReducerMap<infer A> ? A : never;

type RootReduceState<T extends IReducerMap<any>> = {
  [K in keyof T]: T[K][0];
};

export function useRootReducer<T extends IReducerMap<any>>(
  reducerMap: T,
): [RootReduceState<T>, Dispatch<RootReduceAction<T>>] {
  if (!reducerMap) {
    throw new Error('useRootReducer: please pass useReducers argv');
  }
  const rootStateKeys = Object.keys(reducerMap);
  const rootState = rootStateKeys.reduce(
    (lastState, key) => ({
      ...lastState,
      [key]: reducerMap[key][0],
    }),
    {} as RootReduceState<T>,
  );
  if (!useRootReducerDispatch) {
    useRootReducerDispatch = (action: RootReduceAction<T>) => {
      rootStateKeys.forEach((key) => {
        const fn = reducerMap[key][1];
        fn(action);
      });
    };
  }

  return [ rootState, useRootReducerDispatch ];
}
