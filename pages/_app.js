import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Header from "../components/Header";
import { StateContext } from "../context/StateContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import NextNprogress from "nextjs-progressbar";

export default function App({
  
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <NextNprogress />
      <PayPalScriptProvider
      
        options={{
          "client-id":
            "AZY5kIxdadhmfjsYUJGjDdpT5WIDx3YBY7x3NpfzqfXWrvPIPqiEytzvsR4u5j5dwJMmOdyFm3azKsWe",
        }}
      >
        <StateContext>
          <Header />
          <Component {...pageProps} />
        </StateContext>
      </PayPalScriptProvider>
    </SessionProvider>
  );
}
