import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { AppointmentDate } from "../src/components/Appointment";

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
  password: string | null,
  description: string | null,
  favorites: any,
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
    name,
    role,
    business,
    email,
    password,
    description,
    favorites,
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

// add business to database
export function addBusiness(userId: any) {
  const businessRef = collection(db, "businesses");
  const userRef = doc(db, "users", userId);

  addDoc(businessRef, {
    name: "",
    desc: "",
    userId: userId,
    location: "",
    rating: 0,
    manager: "",
    chargeRate: 0,
    level: "Start-up",
    completedBookings: 0,
    pendingBookings: 0,
    earnings: {
      avgBookingPrice: 0,
      activeBookings: 0,
      completedBookings: 0,
      monthlyEarnings: 0,
      cancelledBookings: 0,
      pendingClearance: 0,
      withdrawn: 0,
      usedToHire: 0,
      cleared: 0,
    },
    totalEarnings: 0,
    category: "",
    gallery: {
      imgOne: null,
      imgTwo: null,
      imgThree: null,
      imgFour: null,
    },
  }).then((doc) => {
    updateDoc(userRef, {
      bizId: doc.id,
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
  const businessRef = doc(db, "businesses", bizId, "appointment", name);

  setDoc(businessRef, {
    name,
    time,
    date,
    location,
  });
}

export function blockUser(userId: any, email: string) {
  const blocklistRef = collection(db, "users/" + `${userId}/blocklist`);

  addDoc(blocklistRef, {
    id: "",
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

// destination specific functions (update)
export function updateUser(userId: any, name: string, bio: string) {
  const userRef = doc(db, "users/" + `${userId}`);

  {
    /*if (name.length > 0) {
    update(userRef, {
      name,
    });
  }

  if (bio.length > 0) {
    update(userRef, {
      bio,
    });
  }*/
  }
}

export function changeDP(userId: any, imageUrl: string) {
  const userRef = doc(db, "users/" + `${userId}/`);

  {
    /*if (imageUrl !== "") {
    update(userRef, {
      profile_pic: imageUrl,
    });
  }*/
  }
}

export function refreshCount(userId: any) {
  const userRef = doc(db, "users/" + `${userId}/`);

  {
    /*update(userRef, {
    notifCount: 0,
  });*/
  }
}

export function switchBg(userId: any, background: any) {
  const userRef = doc(db, "users/" + `${userId}/`);

  {
    /*update(userRef, {
    background,
  });*/
  }
}
