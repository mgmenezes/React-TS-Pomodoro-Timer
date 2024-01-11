import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Button } from "./Button";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>Hello</div>;
      <Button variant="primary" />
      <GlobalStyle />
    </ThemeProvider>
  );
};
