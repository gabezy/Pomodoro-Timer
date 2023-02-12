import React from "react";

import {
  FormContainer,
  LabelContainer,
  TaskInput,
  MinutesAmountInput,
} from "./styles";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CycleContext";

export const NewCycleForm = () => {
  const { activeCycle } = React.useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <LabelContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
          type="text"
          id="task"
          list="taskSuggestions"
          placeholder="Dê um nome para o seu projeto"
          disabled={!!activeCycle}
          {...register("task")}
        />
        <datalist id="taskSuggestions">
          <option value="Projeto 1" />
          <option value="Projeto 2" />
          <option value="React" />
        </datalist>
        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          disabled={!!activeCycle}
          {...register("minutesAmount", { valueAsNumber: true })}
        />
        <span>minutos</span>
      </LabelContainer>
    </FormContainer>
  );
};
