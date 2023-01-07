import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDyV3ec5YYEOeYFrNIQG82VOpS4E9b6X1Y",
  authDomain: "gb-285061-f9d93.firebaseapp.com",
  projectId: "gb-285061-f9d93",
  storageBucket: "gb-285061-f9d93.appspot.com",
  messagingSenderId: "932762950835",
  appId: "1:932762950835:web:20a6cb074a0ca0f4ce24c6"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)
export const signUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password)
export const signIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password)
export const logOut = async () => await signOut(firebaseAuth)

const db = getDatabase(app)
export const userRef = ref(db, 'user')
export const messagesRef = ref(db, 'messages')
export const getChatById = (chatId) => ref(db, `messages/${chatId}`)

export const getMessageListById = (chatId) => ref(db, `messages/${chatId}/messageList`)