import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useStateContext } from "../context/StateContext";

const OrderButtonWrapper = ({ price }) => {
  const { totalPrice } = useStateContext();
  return (
    <PayPalButtons
      className="w-[70%] md:w-[40%]"
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: totalPrice / 100,
              },
            },
          ],
        });
      }}
    />
  );
};

export default function App() {
  const [openMpesa, setOpenMpesa] = useState("");

  const { totalPrice } = useStateContext();

  return (
    <div className="flex relative pt-[30%] md:pt-[10%] justify-center items-center z-0 flex-col">
      <h2 className="text-2xl pb-4 font-bold">
        Pay{" "}
        <span className="text-green-600 ">
          Ksh {""}
          {totalPrice}
        </span>
      </h2>
      <button
          onClick={() => setOpenMpesa(!openMpesa)}
          className="w-[70%] md:w-[40%] bg-green-600 px-3 text-white my-2 py-2 rounded-xl font-medium"
        >
          Pay With Mpesa
        </button>
        {openMpesa && (
          <div className="flex flex-col items-center justify-center my-2">
            <h2 className="italic font-medium text-xl">Payment Instructions</h2>
            <ol>
              <li>1.Go to M-Pesa menu</li>
              <li>2.Click on Lipa na M-Pesa</li>
              <li>3.Click on Buy Goods and Services</li>
              <li>4.Enter till no 9956353</li>
              <li>
                5.Enter amount {""} <span>Ksh {totalPrice}</span>
              </li>
              <li>6.Wait for the M-Pesa message</li>
              <li>8.Enter Transaction Code </li>
              <li>9.Click Confirm</li>
            </ol>
            <form>
              <input
                className="border-black border rounded-lg my-2"
                placeholder="Mpesa Transaction ID"
              />
            </form>
            <button className="text-sm py-1 px-2 hover:bg-green-600 bg-gray-800 rounded-md text-white">
              Confirm Payment
            </button>
          </div>
        )}
      <PayPalScriptProvider
        options={{
          "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
          components: "buttons",
          "data-namespace": "paypalOrder",
        }}
      >
        <OrderButtonWrapper className="w-[500px]" />
      </PayPalScriptProvider>
    </div>
  );
}
