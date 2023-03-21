import axios from "axios";

export interface Bank {
  id: number;
  code: string;
  name: string;
}

export async function getBanks(country: string): Promise<Bank[]> {
  const options = {
    method: "GET",
    url: `https://api.flutterwave.com/v3/banks/${country}`,
    headers: {
      Authorization: "Bearer FLWSECK_TEST-SANDBOXDEMOKEY-X",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error: any) {
    throw new Error(error);
  }
}
