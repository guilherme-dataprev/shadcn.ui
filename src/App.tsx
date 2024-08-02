// import { ReactNode } from 'react';
import { ThemeProvider } from "@/components/theme-provider"
import './App.css'
import { ModeToggle } from "./components/mode-toggle"


// interface AppProps {
//   children?: ReactNode;
// }

// function App({ children }: AppProps) {
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle></ModeToggle>
      </ThemeProvider>
    </>
  )
}

export default App
