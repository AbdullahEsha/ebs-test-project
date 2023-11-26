import "@/styles/globals.css";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  // Wraps the page in a Provider component to make the Redux store available to any nested components that need to access the Redux store.
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
