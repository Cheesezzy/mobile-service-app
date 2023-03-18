export const initiateWithdrawal = (
  account_bank: string,
  account_number: string,
  amount: number,
  currency: "NGN",
  narration: string,
  reference: string
) => {
  const transferDetails = {
    account_bank,
    account_number,
    amount,
    currency,
    narration,
    reference,
  };

  const headers = {
    Authorization: "Bearer FLWPUBK-9a55f753a536178d29daacf845465d3a-X",
    "Content-Type": "application/json",
  };

  fetch("https://api.flutterwave.com/v3/transfers", {
    method: "POST",
    headers,
    body: JSON.stringify(transferDetails),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // handle the response data
    })
    .catch((error) => {
      console.error(error); // handle the error
    });
};
