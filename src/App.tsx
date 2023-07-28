import { ThemeContextProvider } from './context/ThemeContext';
import Router from './router';

function App() {
  return (
    <ThemeContextProvider>
      <Router />
    </ThemeContextProvider>
  );
}

export default App;
