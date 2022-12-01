import { Timestamp } from "firebase/firestore";

export const getTime = (seconds: number, nanoseconds: number) => {
  let ms = new Timestamp(seconds, nanoseconds).toMillis();

  let timeExt = new Date(ms).getHours() > 12 ? "PM" : "AM";

  return `${new Date(ms).getHours()}:${new Date(ms).getMinutes()} ${timeExt}`;
};

export const getDay = (seconds: number, nanoseconds: number) => {};
