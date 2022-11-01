import { QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/header";
import HomePage from "./pages/home/home";
import { queryClient } from "./services/api/query-client";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <HomePage />
    </QueryClientProvider> 
  );
}

export default App;
