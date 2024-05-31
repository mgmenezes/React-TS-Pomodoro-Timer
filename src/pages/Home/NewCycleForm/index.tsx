import React from "react";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

export const NewCycleForm = () => {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidation),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  return (
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
        step={1}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  );
};
