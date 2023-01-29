import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default"

import { Button } from "./components/Button";

export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger"/>
    </ThemeProvider>
  )
}
