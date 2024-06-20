import { HandPalm, Play } from "phosphor-react";

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";
import { createContext, useState } from "react";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  setCurrentCycleFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
}

export const CycleContext = createContext({} as CyclesContextType);
const newCycleFormValidation = z.object({
  task: z.string().min(1, "Informe a tarefa"),
  minutesAmount: z
    .number()
    .min(1, "o ciclo é de no minimo 5 minutos")
    .max(60, "o ciclo é de no máximo 60 minutos")
    .int()
    .positive(),
});

type NewCycleFormData = z.infer<typeof newCycleFormValidation>;

export const Home = () => {
  const [cycles, setCycle] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidation),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const handleStopCycle = () => {
    setAmountSecondsPassed(0);
    setCycle((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            interruptedDate: new Date(),
          };
        } else {
          return cycle;
        }
      })
    );
    setActiveCycleId(null);
  };

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function setCurrentCycleFinished() {
    setCycle((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            finishedDate: new Date(),
          };
        } else {
          return cycle;
        }
      })
    );
  }

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };
    setCycle((state) => [...state, newCycle]);
    setActiveCycleId(newCycle.id);
    setAmountSecondsPassed(0);
    reset();
  };

  const task = watch("task");
  const isSubmitDisabled = !task;

  console.log(cycles);

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <CycleContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            setCurrentCycleFinished,
            amountSecondsPassed,
            setSecondsPassed,
          }}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        </CycleContext.Provider>
        {activeCycle ? (
          <StopCountdownButton type="button" onClick={() => handleStopCycle()}>
            <HandPalm size={24} />
            Parar ciclo
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Iniciar ciclo
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
};
