import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";

import Contacts from "./pages/Contacts";
import EditForm from "./pages/EditForm";
import CreateForm from "./pages/CreateForm";
const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
const App: React.FC = () => {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Navigate to="contacts" />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/create" element={<CreateForm />} />
            <Route path="/edit/:id" element={<EditForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#121212", // Default dark background
            color: "#fff", // White text for default
          },
          // Options for success type
          success: {
            duration: 3000,
            style: {
              background: "#121212", // Dark background for success
              color: "blue", // Blue text for success
            },
          },
          // Options for error/failure type
          error: {
            duration: 3000,
            style: {
              background: "#171717", // Slightly lighter dark background for failure
              color: "#ff4d4d", // Bright red for error text
            },
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
