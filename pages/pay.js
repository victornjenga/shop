import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
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
                value: totalPrice / 121.08,
              },
            },
          ],
        });
      }}
    />
  );
};

export default function App() {
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
