import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header";
import { MainRoutes } from "./routes/routes";
import { queryClient } from "./services/api/query-client";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <MainRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
