import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export function clearAllUsers() {
  const userRef = ref(db, "users/");

  remove(userRef);
}

export function deleteUser(uid) {
  const userRef = ref(db, "users/" + uid);

  remove(userRef);
}

export function createUser(
  userId,
  name,
  businessName,
  email,
  password,
  description,
  favorites,
  joined,
  messages
) {
  const userRef = doc(db, "users", userId);
  setDoc(userRef, {
    name,
    businessName,
    email,
    password,
    description,
    favorites,
    joined,
    messages,
  });
}

// for sending messages
export async function sendMessage(
  senderId,
  receiverId,
  text,
  senderName,
  receiverName,
  createdAt
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
export function createNotification(userId, notification, data, seen, roomId) {
  const notifsRef = ref(db, "users/" + `${userId}/notifications`);

  // push the notification and data into the array
  if (!roomId) {
    push(notifsRef, { notification, data, seen });
  } else {
    push(notifsRef, { notification, data, seen, roomId });
  }
}

export function updateSeen(userId, notifId) {
  const notifRef = ref(db, "users/" + `${userId}/notifications/${notifId}`);
  update(notifRef, { seen: true });
}

export function addReactionToUser(userId, reaction) {
  const userRef = ref(db, "users/" + userId);

  update(userRef, {
    reaction,
  });
}

export const addRoomToFavorite = (
  userId,
  roomId,
  name,
  subject,
  inviteOnly,
  adultsOnly,
  anonymous,
  createdBy,
  createdOn,
  about
) => {
  const userRef = ref(db, "users/" + `${userId}/` + "favorites/" + roomId);

  set(userRef, {
    name,
    subject,
    inviteOnly,
    adultsOnly,
    anonymous,
    createdBy,
    createdOn,
    about,
  });
};

export const removeRoomFromFavorite = (userId, roomId) => {
  const userRef = ref(db, "users/" + `${userId}/` + "favorites/" + roomId);

  remove(userRef);
};

// destination specific functions (update)
export function updateUser(userId, name, bio) {
  const userRef = ref(db, "users/" + `${userId}`);

  if (name.length > 0) {
    update(userRef, {
      name,
    });
  }

  if (bio.length > 0) {
    update(userRef, {
      bio,
    });
  }
}

export function updateRoomAbout(roomId, about) {
  const roomRef = ref(db, "rooms/" + `${roomId}`);

  update(roomRef, {
    about,
  });
}

export function changeDP(userId, imageUrl) {
  const userRef = ref(db, "users/" + `${userId}/`);

  if (imageUrl !== "") {
    update(userRef, {
      profile_pic: imageUrl,
    });
  }
}

export function changeCover(userId, coverUrl) {
  const userRef = ref(db, "users/" + `${userId}/`);

  if (coverUrl !== "") {
    update(userRef, {
      cover_photo: coverUrl,
    });
  }
}

export function updateInSession(roomId, inSession) {
  const roomRef = ref(db, "rooms/" + `${roomId}`);

  update(roomRef, {
    inSession,
  });
}

export function refreshCount(userId) {
  const userRef = ref(db, "users/" + `${userId}/`);

  update(userRef, {
    notifCount: 0,
  });
}

export function switchBg(userId, background) {
  const userRef = ref(db, "users/" + `${userId}/`);

  update(userRef, {
    background,
  });
}

export function removeUserFromRoom(userId, roomId) {
  const roomUserRef = ref(db, "rooms/" + `${roomId}/` + "users/" + userId);

  remove(roomUserRef);
}

export function deleteRoom(roomId) {
  const roomRef = ref(db, "rooms/" + `${roomId}`);

  remove(roomRef);
}
