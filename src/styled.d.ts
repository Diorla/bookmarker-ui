import 'styled-components';
import ThemeProps from './interfaces/ThemeProps';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeProps {}
}
