import 'styled-components';
import ThemeProps from './theme/ThemeProps';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeProps {}
}
