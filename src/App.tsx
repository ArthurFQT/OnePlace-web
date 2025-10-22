import GlobalStyles from './styles/globalStyles';
import ThemeProvider from './styles/ThemeProvider';
import { HashRouter } from 'react-router-dom';
import PageProvider from './context/PageContext';
import { AuthProvider } from './context/AuthContext';
import Routes from './routes';
import { NetworkDetector } from './components/_ui/NetworkDetector';

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <AuthProvider>
          <PageProvider>
            <GlobalStyles />
            <NetworkDetector />
            <Routes />
          </PageProvider>
        </AuthProvider>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
