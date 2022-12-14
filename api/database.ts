import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

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
  name: string,
  business: {},
  email: string,
  password: string,
  description: string,
  favorites: any,
  joined: any,
  messages: any,
  onBoard: boolean,
  bizInformed: boolean
) {
  const userRef = doc(db, "users", userId);
  setDoc(userRef, {
    name,
    business,
    email,
    password,
    description,
    favorites,
    joined,
    messages,
    onBoard,
    bizInformed,
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

// for sending messages
export async function sendMessage(
  senderId: any,
  receiverId: any,
  text: string,
  senderName: string,
  receiverName: string,
  createdAt: any
) {
  // for adding or updating the present chats
  const senderNegoRef = doc(db, "users", senderId, "negotiating", receiverId);
  const receiverNegoRef = doc(db, "users", receiverId, "negotiating", senderId);

  await setDoc(senderNegoRef, {
    text,
    type: "sent",
    sentBy: {
      id: senderId,
      name: senderName,
    },
    receivedBy: {
      id: receiverId,
      name: receiverName,
    },
    createdAt,
    seen: false,
  });

  await setDoc(receiverNegoRef, {
    text,
    type: "received",
    sentBy: {
      id: senderId,
      name: senderName,
    },
    receivedBy: {
      id: receiverId,
      name: receiverName,
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
  const receiverRef = collection(
    db,
    "users",
    receiverId,
    "messages",
    senderId,
    "chats"
  );

  await addDoc(senderRef, {
    text,
    type: "sent",
    sentBy: {
      id: senderId,
      name: senderName,
    },
    receivedBy: {
      id: receiverId,
      name: receiverName,
    },
    createdAt,
    seen: false,
  });

  await addDoc(receiverRef, {
    text,
    type: "received",
    sentBy: {
      id: senderId,
      name: senderName,
    },
    receivedBy: {
      id: receiverId,
      name: receiverName,
    },
    createdAt,
    seen: false,
  });
}

// add notification into the notification array
export function createNotification(
  userId: any,
  notification: any,
  data: any,
  seen: boolean,
  roomId: string
) {
  const notifsRef = doc(db, "users/" + `${userId}/notifications`);

  // push the notification and data into the array
  if (!roomId) {
    //push(notifsRef, { notification, data, seen });
  } else {
    //push(notifsRef, { notification, data, seen, roomId });
  }
}

export function updateSeen(userId: any, notifId: string) {
  const notifRef = doc(db, "users/" + `${userId}/notifications/${notifId}`);
  //update(notifRef, { seen: true });
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

export function changeCover(userId: any, coverUrl: string) {
  const userRef = doc(db, "users/" + `${userId}/`);

  {
    /*if (coverUrl !== "") {
    update(userRef, {
      cover_photo: coverUrl,
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
