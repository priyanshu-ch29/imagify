import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { appRouter } from "./App.jsx";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import { Toaster } from "@/components/ui/toaster";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
      <Toaster />
    </Provider>
  </StrictMode>
);
