// import AppLayout from "./AppLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import AppContextProvider from "./context/AppContext";
import AppProviders from "./Routers/AppProviders";
import { ToastContainer } from "react-toastify";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer position="top-center" theme="colored" />
      <AppContextProvider>
        <AppProviders />
      </AppContextProvider>
    </QueryClientProvider>
  );
}
