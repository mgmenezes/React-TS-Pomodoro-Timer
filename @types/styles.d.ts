import "styled-components";
import { defaultTheme } from '../src/styles/themes/default'

type ThemesType = typeof defaultTheme

declare module "styled-components" { 
  export interface ThemeDefaults extends ThemesType { }
}
