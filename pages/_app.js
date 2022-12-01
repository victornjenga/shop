import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Header from "../components/Header";
import { StateContext } from "../context/StateContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import NextNprogress from "nextjs-progressbar";
import { RiWhatsappFill } from "react-icons/ri";
import Footer from "../components/Footer";
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
      <div className="bottom-10 fixed cursor-pointer right-4 ">
        <a
          href="https://wa.me/message/L3HS2URJOXMCH1"
          target="_blank"
          rel="noreferrer"
        >

          <RiWhatsappFill className=" text-5xl md:text-7xl text-green-600 " />
        </a>
      </div>
      <Footer/>
    </SessionProvider>
  );
}
