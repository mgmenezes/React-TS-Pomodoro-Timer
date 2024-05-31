import { CountDownContainer, Divider } from "./styles";
import { useContext, useEffect } from "react";
import { differenceInSeconds } from "date-fns";
import { CycleContext } from "..";

export const Countdown = () => {
  const {
    activeCycle,
    activeCycleId,
    setCurrentCycleFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CycleContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - Pomodoro`;
    }
  }, [minutes, seconds, activeCycle]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsPassed = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );

        if (secondsPassed >= totalSeconds) {
          setCurrentCycleFinished();
          setSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setSecondsPassed(secondsPassed);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    setCurrentCycleFinished,
    setSecondsPassed,
  ]);

  return (
    <CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Divider>:</Divider>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountDownContainer>
  );
};
