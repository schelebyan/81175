import React, { createContext, useContext, useRef } from 'react';
import { proxy } from 'valtio'

interface IState {
  slider: number;
}

type ContextProps = IState;

const InitialState: IState = {
  slider: 0,
};

export const WidgetsContext = createContext(InitialState as ContextProps);
export const useWidgetsState = (): ContextProps => useContext(WidgetsContext);

const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const state = useRef(proxy(InitialState)).current;
  return (
    <WidgetsContext.Provider
      value={state}
    >
      {children}
    </WidgetsContext.Provider>
  );
};

export default StateProvider;
