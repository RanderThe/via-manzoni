import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import { doc, getDoc, setDoc, deleteDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);
const db = getFirestore(app);

// Get a list of cities from your database
export const getCollection = async (collectionName) => {

    const collectionResult = collection(db, collectionName);
    const collectionSnapshot = await getDocs(collectionResult);
    const collectionList = collectionSnapshot.docs.map(doc => doc.data());
    return collectionList;
};


export const getDocByIDFirebase = async (collectionName, docID) => {

    const docRef = doc(db, collectionName, docID);
    const docSnap = await getDoc(docRef);
    const object = docSnap.data();

    if (object) {
        return object;
    } else {
        return null;
    }
};


export const postDoc = async (collectionName, docID, object) => {
    await setDoc(doc(db, collectionName, docID), object);
};


export const removeDoc = async (collectionName, docID) => {
    await deleteDoc(doc(db, collectionName, docID));
};


export const updtDoc = async (collectionName, docID, object) => {
    const washingtonRef = doc(db, collectionName, docID);
    await setDoc(washingtonRef, object);
};
