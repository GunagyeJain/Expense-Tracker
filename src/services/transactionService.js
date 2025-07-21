import { collection, addDoc, getDocs, onSnapshot, getFirestore} from "firebase/firestore";
import { auth, db } from "./firebase";
import { getAuth } from "firebase/auth";



// Add a transaction
export const addTransaction = async (transaction) => {
  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error("No user is logged in. Cannot add transaction.");
  }

  const userId = currentUser.uid;

  const transactionWithTimestamp = {
    ...transaction,
    createdAt: new Date(),
  };

  await addDoc(collection(db, "users", userId, "transactions"), transactionWithTimestamp);
};


// Fetch all transactions once
export const getTransactions = async () => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User not logged in");

    const querySnapshot = await getDocs(collection(db, "users", user.uid, "transactions"));
    const transactions = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return transactions;
  } catch (error) {
    console.error("❌ Error fetching transactions:", error.message);
    return [];
  }
};

// Real-time listener
export const listenToTransactions = (callback) => {
  const user = auth.currentUser;
  if (!user) return () => {}; // return empty unsubscribe

  const unsub = onSnapshot(
    collection(db, "users", user.uid, "transactions"),
    (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      callback(data);
    }
  );

  return unsub; // so you can unsubscribe later
};
