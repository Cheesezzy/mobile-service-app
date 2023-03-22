import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { AppointmentDate } from "../src/components/appointment/Appointment";
import { useCollectionData } from "react-firebase-hooks/firestore";

export function clearAllUsers() {
  const userRef = doc(db, "users/");

  deleteDoc(userRef);
}

export function deleteUser(uid: any) {
  const userRef = doc(db, "users/" + uid);

  deleteDoc(userRef);
}

export function createUser(
  userId: any,
  name: string | null,
  role: string | null,
  business: {},
  email: string | null,
  phone: string | null,
  password: string | null,
  description: string | null,
  joined: any,
  messages: any,
  onBoard: boolean,
  bizInformed: boolean,
  bizId: any,
  profilePic: any,
  balance: any
) {
  const userRef = doc(db, "users", userId);
  setDoc(userRef, {
    id: userId,
    name,
    role,
    business,
    email,
    emailVerified: false,
    phone,
    password,
    description,
    joined,
    messages,
    onBoard,
    bizInformed,
    bizId,
    profilePic,
    balance,
  });
}

// for changing onBoard status
export function updateOnBoardStat(userId: any) {
  const userOnBoardRef = doc(db, "users", userId);

  updateDoc(userOnBoardRef, {
    onBoard: true,
  });
}

// for changing onBoard status
export function updateBizInformedStat(userId: any) {
  const userbizInformedRef = doc(db, "users", userId);

  updateDoc(userbizInformedRef, {
    bizInformed: true,
  });
}

export function updateEmailVerified(userId: any) {
  const userRef = doc(db, "users", userId);

  updateDoc(userRef, {
    emailVerified: true,
  });
}

export const updateProfilePic = (userId: any, imageUrl: string) => {
  const userRef = doc(db, "users", userId);

  updateDoc(userRef, {
    profilePic: imageUrl,
  });
};

// for sending messages
export async function sendMessage(
  senderId: any,
  receiverId: any,
  text: any,
  attachment: any,
  senderName: string,
  senderPic: any,
  receiverName: string,
  receiverPic: any,
  createdAt: any
) {
  // for adding or updating the present chats
  const senderNegoRef = doc(db, "users", senderId, "negotiating", receiverId);
  const receiverNegoRef = doc(db, "users", receiverId, "negotiating", senderId);

  await setDoc(senderNegoRef, {
    msgId: receiverId,
    text,
    attachment,
    type: "sent",
    sentBy: {
      id: senderId,
      name: senderName,
      pic: senderPic,
    },
    receivedBy: {
      id: receiverId,
      name: receiverName,
      pic: receiverPic,
    },
    createdAt,
    seen: false,
  });

  await setDoc(receiverNegoRef, {
    msgId: senderId,
    text,
    attachment,
    type: "received",
    sentBy: {
      id: senderId,
      name: senderName,
      pic: senderPic,
    },
    receivedBy: {
      id: receiverId,
      name: receiverName,
      pic: receiverPic,
    },
    createdAt,
    seen: false,
  });

  // for sending the messages
  const senderRef = collection(
    db,
    "users",
    senderId,
    "messages",
    receiverId,
    "chats"
  );

  await addDoc(senderRef, {
    msgId: "",
    text,
    attachment,
    type: "sent",
    sentBy: {
      id: senderId,
      name: senderName,
      pic: senderPic,
    },
    receivedBy: {
      id: receiverId,
      name: receiverName,
      pic: receiverPic,
    },
    createdAt,
    seen: false,
  }).then((msg) => {
    const senderMsgIdRef = doc(
      db,
      "users",
      senderId,
      "messages",
      receiverId,
      "chats",
      msg.id
    );

    updateDoc(senderMsgIdRef, {
      msgId: msg.id,
    });
  });
}

export async function sendSupportMessage(
  senderId: any,
  receiverId: any,
  text: any,
  attachment: any,
  senderName: string,
  senderPic: any,
  receiverName: string,
  receiverPic: any,
  createdAt: any
) {
  // for sending the messages
  const senderRef = collection(
    db,
    "users",
    senderId,
    "messages",
    receiverId,
    "chats"
  );

  await addDoc(senderRef, {
    msgId: "",
    text,
    attachment,
    type: "sent",
    sentBy: {
      id: senderId,
      name: senderName,
      pic: senderPic,
    },
    receivedBy: {
      id: receiverId,
      name: receiverName,
      pic: receiverPic,
    },
    createdAt,
    seen: false,
  }).then((msg) => {
    const senderMsgIdRef = doc(
      db,
      "users",
      senderId,
      "messages",
      receiverId,
      "chats",
      msg.id
    );

    updateDoc(senderMsgIdRef, {
      msgId: msg.id,
    });
  });
}

export async function deleteMessages(senderId: any, receiverId: any) {
  // for deleting the present chats
  const senderNegoRef = doc(db, "users", senderId, "negotiating", receiverId);
  deleteDoc(senderNegoRef);

  // for deleting the messages
  const senderRef = doc(db, "users", senderId, "messages", receiverId);
  deleteDoc(senderRef);
}

// update user role
export function updateUserRole(userId: any, role: string) {
  const userRoleRef = doc(db, "users", userId);

  updateDoc(userRoleRef, {
    role,
  });
}

export function updateUserPassword(userId: any, password: string) {
  const userPasswordRef = doc(db, "users", userId);

  updateDoc(userPasswordRef, {
    password,
  });
}

// add business to database
export function addBusiness(userId: any) {
  const businessesRef = collection(db, "businesses");
  const userRef = doc(db, "users", userId);

  addDoc(businessesRef, {
    id: "",
    name: "",
    desc: "",
    businessDP: "",
    userId: userId,
    location: "",
    rating: 0,
    manager: "",
    chargeRate: 100,
    level: "Start-up",
    completedBookings: 0,
    pendingBookings: 0,
    avgBookingPrice: 0,
    pendingBookingsPrice: 0,
    completedBookingsPrice: 0,
    monthlyEarnings: 0,
    cancelledBookingsPrice: 0,
    withdrawn: 0,
    amountUsedToHire: 0,
    totalEarnings: 0,
    category: "",
    gallery: {
      imgOne: null,
      imgTwo: null,
      imgThree: null,
      imgFour: null,
    },
  }).then((data) => {
    const businessRef = doc(db, "businesses", data.id);

    updateDoc(userRef, {
      id: data.id,
    });

    updateDoc(userRef, {
      bizId: data.id,
    });
  });
}

export function updateUserName(userId: any, name: string) {
  const userRef = doc(db, "users", userId);

  updateDoc(userRef, {
    name,
  });
}

export function updatePassword(userId: any, password: string) {
  const userRef = doc(db, "users", userId);

  updateDoc(userRef, {
    password,
  });
}

// info about business
export function updateBusinessName(bizId: any, name: string) {
  const businessRef = doc(db, "businesses", bizId);

  updateDoc(businessRef, {
    name,
  });
}

export function updateBusinessDesc(bizId: any, desc: any) {
  const businessRef = doc(db, "businesses", bizId);

  updateDoc(businessRef, {
    desc,
  });
}

export function updateLocation(bizId: any, lat: any, lng: any) {
  const businessRef = doc(db, "businesses", bizId);

  updateDoc(businessRef, {
    location: {
      lat,
      lng,
    },
  });
}

// specifically for the search functionality
export function updateSearchLocation(userId: any, lat: any, lng: any) {
  const businessRef = doc(db, "users", userId);

  updateDoc(businessRef, {
    searchLocation: {
      lat,
      lng,
    },
  });
}

export function updateCategory(bizId: any, category: any) {
  const businessRef = doc(db, "businesses", bizId);

  updateDoc(businessRef, {
    category,
  });
}

export function updateRating(bizId: any, rating: any) {
  const businessRef = doc(db, "businesses", bizId);

  updateDoc(businessRef, {
    rating,
  });
}

export const updateBusinessDP = (bizId: any, imageUrl: string) => {
  const businessesRef = doc(db, "businesses", bizId);

  updateDoc(businessesRef, {
    businessDP: imageUrl,
  });
};

export function updateRatingsAndReviews(
  userId: any,
  name: any,
  date: any,
  bizId: any,
  rating: any,
  review: any
) {
  const ratingsAndReviewsRef = doc(
    db,
    "businesses",
    bizId,
    "ratingsAndReviews",
    userId
  );

  updateDoc(ratingsAndReviewsRef, {
    id: userId,
    name,
    date,
    rating,
    review,
  });
}

export function updateGallery(bizId: any, url: any, img: string) {
  const businessRef = doc(db, "businesses", bizId, "gallery", img);

  setDoc(businessRef, {
    url,
  });
}

export function addAppointment(
  bizId: any,
  name: any,
  time: any,
  date: AppointmentDate,
  location: any
) {
  const appointmentsRef = doc(db, "businesses", bizId, "appointments", name);

  setDoc(appointmentsRef, {
    name,
    time,
    date,
    location,
    completed: false,
  });
}

export function blockUser(userId: any, name: string, email: string) {
  const blocklistRef = collection(db, "users/" + `${userId}/blocklist`);

  addDoc(blocklistRef, {
    id: "",
    name,
    email,
  }).then((blockedUser) => {
    const blockedUserRef = doc(
      db,
      "users",
      userId,
      "blocklist",
      blockedUser.id
    );

    updateDoc(blockedUserRef, {
      id: blockedUser.id,
    });
  });
}

export function unBlockUser(userId: any, email: string) {
  const blocklistRef = collection(db, "users/" + `${userId}/blocklist`);

  const blocklistQ = query(blocklistRef, where("email", "==", email));

  getDocs(blocklistQ).then((blockedUsers) => {
    blockedUsers.forEach((blockedUser) => {
      const blocklistRef = doc(
        db,
        "users/" + `${userId}/blocklist/${blockedUser.id}`
      );
      deleteDoc(blocklistRef);
    });
  });
}

// add notification into the notification array
export function createNotification(
  userId: any,
  name: any,
  notification: any,
  senderId: any
) {
  const notifsRef = collection(db, "users/" + `${userId}/notifications`);

  addDoc(notifsRef, {
    id: "",
    notification,
    name,
    senderId,
    seen: false,
  }).then((notif) => {
    const notificationRef = doc(db, "users", userId, "notifications", notif.id);

    updateDoc(notificationRef, {
      id: notif.id,
    });
  });
}

export function updateSeen(userId: any, notifId: string) {
  const notifRef = doc(db, "users/" + `${userId}/notifications/${notifId}`);
  //update(notifRef, { seen: true });
}

export async function transferFunds(
  senderId: any,
  receiverId: any,
  senderBalance: any,
  receiverBalance: any,
  amount: number
) {
  const senderRef = doc(db, "users", senderId);
  const receiverRef = doc(db, "users", receiverId);

  await senderBalance;
  await receiverBalance;

  if (senderBalance) {
    updateDoc(senderRef, {
      balance: senderBalance - amount,
    });
  }

  if (receiverBalance) {
    updateDoc(receiverRef, {
      balance: receiverBalance + amount,
    });
  }
}

export async function updateAmountUsedToHire(
  bizId: any,
  amountUsedToHire: any,
  amount: number
) {
  const businessRef = doc(db, "businesses", bizId);

  await amountUsedToHire;

  if (amountUsedToHire) {
    updateDoc(businessRef, {
      amountUsedToHire: amountUsedToHire + amount,
    });
  }
}

export async function fundAccount(
  userId: any,
  userBalance: any,
  amount: number
) {
  const userRef = doc(db, "users", userId);

  await userBalance;

  if (userBalance) {
    updateDoc(userRef, {
      balance: userBalance + amount,
    });
  }
}

export async function withdrawFunds(
  userId: any,
  bizId: any,
  userBalance: any,
  withdrawn: any,
  amount: number
) {
  const userRef = doc(db, "users", userId);
  const businessRef = doc(db, "businesses", bizId);

  await userBalance;
  await withdrawn;

  if (userBalance) {
    updateDoc(userRef, {
      balance: userBalance - amount,
    });
  }

  if (withdrawn) {
    updateDoc(businessRef, {
      withdrawn: withdrawn + amount,
    });
  }
}

export function updateRatingG(bizId: any, rating: any) {
  const businessRef = doc(db, "businesses", bizId);

  updateDoc(businessRef, {
    rating,
  });
}

export const updateTotalEarnings = async (
  bizId: string,
  totalEarnings: any,
  amount: number
) => {
  const businessRef = doc(db, "businesses", bizId);

  await totalEarnings;

  if (totalEarnings) {
    updateDoc(businessRef, {
      pendingBookings: totalEarnings + amount,
    });
  }
};

export const updatePendingBooking = async (
  bizId: any,
  pendingBookings: any,
  pendingBookingsPrice: any,
  amount: any
) => {
  const businessRef = doc(db, "businesses", bizId);

  await pendingBookings;
  await pendingBookingsPrice;

  if (pendingBookings) {
    updateDoc(businessRef, {
      pendingBookings: pendingBookings + 1,
    });
  }

  if (pendingBookingsPrice) {
    updateDoc(businessRef, {
      pendingBookingsPrice: pendingBookingsPrice + amount,
    });
  }
};

const updateCompletedBooking = async (
  bizId: any,
  completedBookings: any,
  completedBookingsPrice: any,
  amount: any
) => {
  const businessRef = doc(db, "businesses", bizId);

  await completedBookings;
  await completedBookingsPrice;

  if (completedBookings) {
    updateDoc(businessRef, {
      completedBookings: completedBookings + 1,
    });
  }

  if (completedBookingsPrice) {
    updateDoc(businessRef, {
      completedBookingsPrice: completedBookingsPrice + amount,
    });
  }
};

export function addRecentOrder(
  bizId: any,
  name: any,
  profilePic: any,
  createdAt: any,
  price: any
) {
  const recentOrdersRef = collection(db, "businesses", bizId, "recentOrders");

  addDoc(recentOrdersRef, {
    name,
    profilePic,
    createdAt,
    price,
  });
}

export function addTransaction(
  title: any,
  senderId: any,
  receiverId: any | null,
  senderName: any,
  receiverName: any,
  amount: any,
  type: "Transfer" | "Fund" | "Withdraw",
  ref: any
) {
  const senderRef = collection(db, "users", senderId, "transactionHistory");
  const receiverRef = collection(db, "users", receiverId, "transactionHistory");

  if (type === "Fund") {
    addDoc(senderRef, {
      title,
      ref,
      type,
      sentBy: {
        id: senderId,
        name: senderName,
      },
      createdAt: serverTimestamp(),
      status: "submitted",
      amount,
    });
  }

  if (type === "Withdraw") {
    addDoc(senderRef, {
      title,
      ref,
      type,
      sentBy: {
        id: senderId,
        name: senderName,
      },
      createdAt: serverTimestamp(),
      status: "submitted",
      amount,
    });
  }

  if (type === "Transfer") {
    addDoc(senderRef, {
      title,
      ref,
      type,
      sentBy: {
        id: senderId,
        name: senderName,
      },
      receivedBy: {
        id: receiverId,
        name: receiverName,
      },
      createdAt: serverTimestamp(),
      status: "submitted",
      amount,
    });

    addDoc(receiverRef, {
      title,
      ref,
      type,
      sentBy: {
        id: senderId,
        name: senderName,
      },
      receivedBy: {
        id: receiverId,
        name: receiverName,
      },
      createdAt: serverTimestamp(),
      status: "submitted",
      amount,
    });
  }
}

const obj = {
  name: "",
  desc: "",
  userId: "userId",
  location: "",
  rating: 0,
  manager: "",
  chargeRate: 0,
  level: "Start-up",
  halfdonecompletedBookings: 0,
  donependingBookings: 0,
  avgBookingPrice: 0,
  donependingBookingsPrice: 0,
  halfdonecompletedBookingsPrice: 0,
  monthlyEarnings: 0,
  cancelledBookingsPrice: 0,
  donewithdrawn: 0,
  doneamountUsedToHire: 0,
  donetotalEarnings: 0,
  category: "",
  gallery: {
    imgOne: null,
    imgTwo: null,
    imgThree: null,
    imgFour: null,
  },
};
