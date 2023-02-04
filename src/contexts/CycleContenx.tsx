import { differenceInSeconds } from "date-fns";
import React from "react";
import { ReactNode } from "react";
import {
  ActionTypes,
  addNewCycleAction,
  interruptCurrentCycleAction,
  makeCurrentCycleAsFinishedAction,
} from "../reducers/Cycles/Actions";
import { Cycle, cyclesReducer } from "../reducers/Cycles/reducer";

type CreateCycleData = {
  task: string;
  minutesAmount: number;
};

interface CycleContextProps {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  markCurrentCycleAsFinished: () => void;
  amountSecondsPassed: number;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCurrentCycle: () => void;
}

export const CyclesContext = React.createContext({} as CycleContextProps);

type CyclesContextProviderProps = {
  children: ReactNode;
};

export const CyclesContentProvider = ({
  children,
}: CyclesContextProviderProps) => {
  const [cyclesState, dispatch] = React.useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storageStateAsJSON = localStorage.getItem(
        "@pomodoro-timer:cycles-state-1.0.0"
      );
      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON);
      }
    }
  );

  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = React.useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }

    return 0;
  });

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds);
  };

  const markCurrentCycleAsFinished = () => {
    dispatch(makeCurrentCycleAsFinishedAction(activeCycle));
  };

  const createNewCycle = (data: CreateCycleData) => {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));
    setAmountSecondsPassed(0);
  };

  const interruptCurrentCycle = () => {
    dispatch(interruptCurrentCycleAction(activeCycle));
  };

  React.useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem("@pomodoro-timer:cycles-state-1.0.0", stateJSON);
  }, [cyclesState]);

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
};
