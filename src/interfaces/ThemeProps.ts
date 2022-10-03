export default interface ThemeProps {
  /**
   * device breakpoints
   */
  breakpoint: { xs: number; sm: number; md: number; lg: number; xl: number };

  /**
   * Used to indicate how raised it is
   */
  elevation: {
    low: string;
    medium: string;
    high: string;
  };

  /**
   * Used to indicated how deep it is
   */
  depth: {
    shallow: string;
    medium: string;
    deep: string;
  };

  /**
   * z-index
   */
  stack: {
    appbar: number;
    drawer: number;
    modal: number;
    snackbar: number;
    tooltip: number;
  };

  /**
   * transform
   */
  duration: {
    short: string;
    medium: string;
    long: string;
  };

  /**
   * used to indicate dark or light
   */
  shade: {
    dark: string;
    darker: string;
    darkest: string;
    light: string;
    lighter: string;
    lightest: string;
  };

  /**
   * colours
   */
  palette: {
    /**
     * main colour
     */
    primary: {
      main: string;
      dark: string;
      light: string;
    };

    /**
     * alternate colour to main or for contrast
     */
    secondary: {
      main: string;
      dark: string;
      light: string;
    };

    /**
     * Used to indicate that there is an error
     */
    error: {
      main: string;
      dark: string;
      light: string;
    };

    /**
     * Indicates that there is something wrong but not severe
     */
    warning: {
      main: string;
      dark: string;
      light: string;
    };

    /**
     * Something good or expected happened
     */
    success: {
      main: string;
      dark: string;
      light: string;
    };

    /**
     * The default colours
     */
    main: {
      black: string;
      white: string;
    };
  };
}
