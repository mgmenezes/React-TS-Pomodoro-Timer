import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  CountDownContainer,
  Divider,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  StartCountdownButton,
  TaskInput,
} from "./styles";
import { useState } from "react";

const newCycleFormValidation = z.object({
  task: z.string().min(1, "Informe a tarefa"),
  minutesAmount: z
    .number()
    .min(5, "o ciclo é de no minimo 5 minutos")
    .max(60, "o ciclo é de no máximo 60 minutos")
    .int()
    .positive(),
});

// interface NewCycleFormData {
//   task: string;
//   minutesAmount: number;
// }
type NewCycleFormData = z.infer<typeof newCycleFormValidation>;
interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
}

export const Home = () => {
  const [cycles, setCycle] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPast, setAmountSecondsPast] = useState(0);

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidation),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const totalSeconds = activeCycle ? activeCycle?.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPast : 0;

  const minutesAmount = String(Math.floor(currentSeconds / 60)).padStart(
    2,
    "0"
  );
  const secondsAmount = String(currentSeconds % 60).padStart(2, "0");

  console.log(activeCycle);

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    const newCycle: Cycle = {
      id: String(Date.now()),
      task: data.task,
      minutesAmount: data.minutesAmount,
    };
    setCycle((state) => [...state, newCycle]);
    setActiveCycleId(newCycle.id);
    reset();
  };

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            type="text"
            {...register("task")}
          />
          <datalist id="task-suggestions">
            <option value="Projeto1"></option>
            <option value="Projeto2"></option>
            <option value="Projeto3"></option>
            <option value="aqui"></option>
          </datalist>
          <label htmlFor="">Durante</label>
          <MinutesAmountInput
            placeholder="00"
            type="number"
            id="minutesAmount"
            step={5}
            {...register("minutesAmount", { valueAsNumber: true })}
          />
          <span>minutos</span>
        </FormContainer>

        <CountDownContainer>
          <span>{minutesAmount[0]}</span>
          <span>{minutesAmount[1]}</span>
          <Divider>:</Divider>
          <span>{secondsAmount[0]}</span>
          <span>{secondsAmount[1]}</span>
        </CountDownContainer>
        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
};
