import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from './firebaseConfig';
import { doc, setDoc } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);
const db = getFirestore(app);

// Get a list of cities from your database
export const getFirebase = async (collectionName) => {

    const collectionResult = collection(db, collectionName);
    const collectionSnapshot = await getDocs(collectionResult);
    const collectionList = collectionSnapshot.docs.map(doc => doc.data());
    console.log("repositoryFirebase");
    console.log(collectionList);
    return collectionList;
}


export const writeUserData = async (userId, name, email) => {

    // Add a new document in collection "cities"
    const result = await setDoc(doc(db, "users", userId), {
        username: name,
        email: email
    });
    debugger;
    return result;
}