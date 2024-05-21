import React from "react";

import AppRouter from "./router/AppRouter";
import MovieContextProvider from "./contexts/MovieContextProvider";
import store from "./redux/store";
import { Provider } from "react-redux";

export const AppNonSync = () => {
  return (
    <Provider store={store}>
      <MovieContextProvider>
        <AppRouter></AppRouter>
      </MovieContextProvider>
    </Provider>
  );
};
