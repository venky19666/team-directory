import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    primary: string;
    background: string;
    fonts: {
      light: string;
    };
  }
}
