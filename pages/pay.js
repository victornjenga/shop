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

  const [mpesacode, setMpesaCode] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  //   Form validation
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Confirm Payment");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const { totalPrice } = useStateContext();
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (mpesacode.length <= 0) {
      tempErrors["mpesacode"] = true;
      isValid = false;
    }
    if (phonenumber.length <= 0) {
      tempErrors["phonenumber"] = true;
      isValid = false;
    }
    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/mpesacode", {
        body: JSON.stringify({
          phonenumber: phonenumber,
          mpesacode: mpesacode,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Confirm Payment");

        // Reset form fields
        setMpesaCode("");
        setPhoneNumber("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Confirm Payment");
      // Reset form fields
      setMpesaCode("");
      setPhoneNumber("");
    }
    console.log(phonenumber, mpesacode);
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
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <input
                type="text"
                value={phonenumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                name="phonenumber"
                className="border-black  text-center border rounded-lg"
                placeholder="Mpesa Phone Number"
              />
              {errors?.phonenumber && (
                <p className="text-red-500 text-sm ">
                  Phone Number cannot be empty.
                </p>
              )}
              <input
                type="text"
                value={mpesacode}
                onChange={(e) => {
                  setMpesaCode(e.target.value);
                }}
                name="mpesacode"
                className="border-black text-center border rounded-lg"
                placeholder="Mpesa Transaction ID"
              />
              {errors?.mpesacode && (
                <p className="text-red-500 text-sm">
                  Transaction ID cannot be empty.
                </p>
              )}
              <button
                type="submit"
                className="text-sm py-1 px-2 hover:bg-green-600 bg-gray-800 rounded-md text-white"
              >
                {buttonText}
              </button>
              <div className="text-left">
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
              </div>
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
