import { HandPalm, Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { differenceInSeconds } from "date-fns";

import {
  CountDownContainer,
  Divider,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  StartCountdownButton,
  StopCountdownButton,
  TaskInput,
} from "./styles";
import { useEffect, useState } from "react";

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
  startDate: Date;
  interruptedDate?: Date;
}

export const Home = () => {
  const [cycles, setCycle] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidation),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  useEffect(() => {

    let interval:NodeJS.Timeout

    if (activeCycle) {
     interval = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate)
        );
      }, 1000);
    }
  

    return () => clearInterval(interval);
  }, [activeCycle]);

  const handleStopCycle = () => {
    setAmountSecondsPassed(0);
    setCycle(cycles.map((cycle)=>{
      if(cycle.id === activeCycleId){
        return {
          ...cycle,
          interruptedDate: new Date()
        }
      }else{
        return cycle
      }
    }))
    setActiveCycleId(null);
  };

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    const id = String(new Date().getTime())
    
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
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() =>{
    if(activeCycle){

      document.title = `${minutes}:${seconds} - Pomodoro`
    }
  },[minutes, seconds, activeCycle]);

  const task = watch("task");
  const isSubmitDisabled = !task;

  console.log(cycles);
  

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            disabled={!!activeCycle}
            placeholder="Dê um nome para o seu projeto"
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
            disabled={!!activeCycle}
            {...register("minutesAmount", { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Divider>:</Divider>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountDownContainer>
        {
          activeCycle ? (
            <StopCountdownButton type="button" onClick={() => handleStopCycle()}>
              <HandPalm size={24} />
              Parar ciclo
            </StopCountdownButton>
          ) : (
            <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
              <Play size={24} />
              Iniciar ciclo
            </StartCountdownButton>
          )
        }
      </form>
    </HomeContainer>
  );
};
