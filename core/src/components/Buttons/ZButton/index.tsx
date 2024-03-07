import {
  Button,
  FluentProvider,
  webLightTheme,
} from "@fluentui/react-components";

import type { ButtonProps } from "@fluentui/react-components";

interface MyProps {
  children: string;
}

export const ZButton = (props: ButtonProps) => (
  <FluentProvider theme={webLightTheme}>
    <Button {...props}>{props.children}</Button>
  </FluentProvider>
);
