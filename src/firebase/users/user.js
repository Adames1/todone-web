import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const createUser = async (userData) => {
  try {
    const docRef = await addDoc(collection(db, "users"), userData);
    return docRef.id;
  } catch (error) {
    console.error("Error creando el usuario: ", error);
  }
};

export const getUser = async () => {};
