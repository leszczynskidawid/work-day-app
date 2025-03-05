import { query } from "firebase/database";
import { db } from "../config";
import { collection, getDocs, where } from "firebase/firestore";

export const firebaseActions = {
  loginUser: async (cardId, password) => {
    try {
      const userQuery = query(
        collection(db, "employer"),
        where("IdCard", "==", cardId)
      );
      const querySnapshot = await getDocs(userQuery);
      if (querySnapshot.empty) {
        throw new Error("nie znaleźono użytkownika");
      }
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();

      return userData;
    } catch (error) {
      throw new Error(error, "Błąd logowania ");
    }
  },
};
