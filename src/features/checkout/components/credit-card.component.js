import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout/checkout.service";

// const stripe = createStripe(
//   "pk_test_51NU2mMSCRwTWcIJXZgB9p2JBoG2suV7wYErZEwEwyqvt4Mxrj34aRUXQLnJiPAtaknz2ViFJHjN1iXveNivMssPv00a7QXxAMx"
// );

export const CreditCardInput = ({ name }) => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    console.log(isIncomplete);
    const expiry = values.expiry.split("/");
    console.log(expiry);
    const card = {
      number: values.numbers,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name: name,
    };
    const info = await cardTokenRequest(card);
    console.log(info);
  };

  return <LiteCreditCardInput onChange={onChange} />;
};
