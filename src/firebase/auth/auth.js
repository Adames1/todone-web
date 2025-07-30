import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const onChangeStatusUser = () => {};

export const logUp = async (email, password) => {};

export const logIn = async (email, password) => {};

export const logOut = async () => {};
