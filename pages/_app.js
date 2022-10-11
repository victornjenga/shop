import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Header from "../components/Header";
import { StateContext } from "../context/StateContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
       <StateContext>
      <Header />
      <Component {...pageProps} />
      </StateContext>
    </SessionProvider>
  );
}
