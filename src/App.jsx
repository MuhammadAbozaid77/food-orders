// import AppLayout from "./AppLayout";
import AppContextProvider from "./context/AppContext";
import AppProviders from "./Routers/AppProviders";

export default function App() {
  return (
    <>
      <AppContextProvider>
        <AppProviders />
      </AppContextProvider>
    </>
  );
}
