import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51NU2mMSCRwTWcIJXZgB9p2JBoG2suV7wYErZEwEwyqvt4Mxrj34aRUXQLnJiPAtaknz2ViFJHjN1iXveNivMssPv00a7QXxAMx"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
