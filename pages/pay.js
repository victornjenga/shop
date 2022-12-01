import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useStateContext } from "../context/StateContext";
import Axios from "axios";

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
  const [phone, setPhone] = useState();
  const [amount, setAmount] = useState();

  const [openMpesa, setOpenMpesa] = useState("");

  const [mpesacode, setMpesaCode] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  //   Form validation
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Pay");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const { totalPrice } = useStateContext();


  const payHandler = (event) => {
    event.preventDefault();
    setButtonText("Processing");
    Axios.post("https://railwaympesa.up.railway.app/token", {
      amount:totalPrice,
      phone,
    })
      .then((res) => {
        console.log(res);
        setButtonText("Pay");
      })
      .catch((error) => {
        console.log(error);
        setButtonText("Pay");
      });
  };

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
            {/* <h2 className="italic font-medium text-xl">Payment Instructions</h2>
            <ol>
              <li>1.Go to M-Pesa menu</li>
              <li>2.Click on Lipa na M-Pesa</li>
              <li>3.Click on Buy Goods and Services</li>
              <li>4.Enter till no 9956353</li>
              <li>
                5.Enter amount {""} <span>Ksh {price}</span>
              </li>
              <li>6.Wait for the M-Pesa message</li>
              <li>8.Enter Transaction Code </li>
              <li>9.Click Confirm</li>
            </ol> */}
            <form onClick={payHandler} className="flex flex-col space-y-2">
              {/* <input
                type="text"
                onChange={(e) => setAmount(e.target.value)}
                name="Amount"
                className="border-black  text-center border rounded-lg"
                placeholder=" Amount"
              /> */}

              <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                name="Phone"
                className="border-black text-center border rounded-lg"
                placeholder="Phone Number"
              />

              <button
                type="submit"
                className="text-sm py-1 px-2 hover:bg-green-600 bg-gray-800 rounded-md text-white"
              >
                {buttonText}
              </button>
              {/* <div className="text-left">
                {showSuccessMessage && (
                  <p className="text-green-500 font-semibold text-[10px] my-2">
                    Thankyou! Your Code has been delivered for confirmation.{" "}
                    <br></br>Getting Back To You shortly
                  </p>
                )}
                {showFailureMessage && (
                  <p className="text-red-500">
                    Oops! Something went wrong, please try again.
                  </p>
                )}
              </div> */}
            </form>
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
