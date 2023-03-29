import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './css/theme';
import AppProvider from './contexts';
import AppRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  );
}
