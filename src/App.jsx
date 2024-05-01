// import AppLayout from "./AppLayout";
import AppContextProvider from "./context/AppContext";
import AppProviders from "./layout/AppProviders";

export default function App() {
  return (
    <>
      <AppContextProvider>
        <AppProviders />
      </AppContextProvider>
    </>
  );
}
