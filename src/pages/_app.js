import "@/styles/globals.css";
import { Provider } from "react-redux";
import store, { persist_store } from "../components/redux/store";
import { PersistGate } from "redux-persist/integration/react";
export default function App({ Component, pageProps }) {
  return <>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>;
}
