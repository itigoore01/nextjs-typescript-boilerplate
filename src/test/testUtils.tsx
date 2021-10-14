import { render } from '@testing-library/react';
import { FC, ReactElement } from 'react';
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers: FC = ({ children }) => {
  return <>{children}</>;
  // return (
  //   <ThemeProvider theme="light">
  //     <TranslationProvider messages={defaultStrings}>
  //       {children}
  //     </TranslationProvider>
  //   </ThemeProvider>
  // )
};

const customRender: typeof render = (ui: ReactElement, options = {}) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render(ui, { wrapper: Providers, ...options }) as any;

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
