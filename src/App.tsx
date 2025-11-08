import GlobalStyles from "./styles/globalStyles";
import ThemeProvider from "./styles/ThemeProvider";
import { HashRouter } from "react-router-dom";
import PageProvider from "./context/PageContext";
import { AuthProvider } from "./context/AuthContext";
import Routes from "./routes";
import { NetworkDetector } from "./components/_ui/NetworkDetector";
import { CyclesContextProvider } from "./context/CyclesContext";

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <AuthProvider>
          <CyclesContextProvider>
            <PageProvider>
              <GlobalStyles />
              <NetworkDetector />
              <Routes />
            </PageProvider>
          </CyclesContextProvider>
        </AuthProvider>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
