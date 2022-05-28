import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../../Shared/Loading";

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");

    const { _id, price, quantity, clientName, email } = order;
    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({
                price: parseInt(price) * parseInt(quantity),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [price, quantity]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            setCardError(error.message);
        } else {
            setCardError("");
        }

        setSuccessMessage("");

        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card,
                    billing_details: {
                        name: clientName,
                        email: email,
                    },
                },
            });
        if (intentError) {
            setCardError(intentError.message);
        } else {
            setCardError("");
            toast.success("Payment Successful!");
            setTransactionId(paymentIntent.id);
            setSuccessMessage("Congrats! Your payment is completed.");

            // update order in backend
            fetch(`http://localhost:5000/order/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
                body: JSON.stringify({
                    paid: true,
                    transactionId: paymentIntent.id,
                    status: "pending",
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-sm mt-6 bg-green-500 hover:bg-green-600 text-white outline-0 border-0 px-4"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-500 mt-3">{cardError}</p>}
            {successMessage && (
                <div>
                    <p className="text-green-600 my-2">{successMessage}</p>
                    <p>
                        Transaction Id:{" "}
                        <span className="text-blue-500">{transactionId}</span>
                    </p>
                </div>
            )}
        </>
    );
};

export default CheckoutForm;
