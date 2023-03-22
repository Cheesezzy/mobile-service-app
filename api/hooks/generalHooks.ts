export const checkRole = (user: any) => {
  return user?.role === "Provider";
};

export const checkUser = (user: any, User: any) => {
  return user?.email === User?.email;
};

export const addCommas = (num: number) => {
  var numString = num.toString();

  var digits = numString.split("");

  var formattedDigits = [];

  for (var i = digits.length - 1; i >= 0; i--) {
    // Push the current digit to the formatted digits array
    formattedDigits.push(digits[i]);

    if ((digits.length - i) % 3 === 0 && i > 0) {
      formattedDigits.push(",");
    }
  }

  return formattedDigits.reverse().join("").toString();
};

export const trimText = (text: string, length: number) => {
  if (text?.length > length) return text?.substring(0, length) + "...";
  else return text;
};

export const roundDistance = (num: number) => {
  return Math.round(num * 10) / 10;
};

export const hideString = (num: number, bool: boolean) => {
  if (bool) {
    return num.toString().replace(/./g, "*");
  }
  return addCommas(num);
};

export const trimAfterSpace = (str: string) => {
  if (str) {
    const index = str.indexOf(" ");
    return index === -1 ? str : str.substring(0, index);
  }
};

export const addPoint = (str: string) => {
  if (str == "5" || str == "4" || str == "3" || str == "2" || str == "1") {
    return `${str}.0`;
  } else return str;
};

export const generateTransactionRef = (length: number) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return `flw_tx_ref_${result}`;
};

export const deductCommission = (amount: number) => {
  const deduction = amount * 0.1;
  const newAmount = amount - deduction;
  return newAmount;
};
