import { Play } from "phosphor-react";
import {
  CountDownContainer,
  Divider,
  FormContainer,
  HomeContainer,
  StartCountdownButton,
} from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="text" />
          <label htmlFor="">Durante</label>
          <input type="number" id="minutesAmount" />
          <span>minutos</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Divider>:</Divider>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartCountdownButton type="submit">
          <Play />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
};
