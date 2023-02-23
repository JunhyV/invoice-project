import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./sass/style.css";
import router from "./router/router";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistGate persistor={persistStore(store)}>
          <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </PersistGate>

  </React.StrictMode>
);
