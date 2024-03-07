import {
  Button,
  FluentProvider,
  webLightTheme,
} from "@fluentui/react-components";

import type { ButtonProps } from "@fluentui/react-components";

interface MyProps {
  children: string;
}

export const ZDefaultButton = (props: ButtonProps) => (
  <FluentProvider theme={webLightTheme}>
    <Button {...props} appearance="primary">
      {props.children}
    </Button>
  </FluentProvider>
);
