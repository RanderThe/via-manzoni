import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import { doc, getDoc } from "firebase/firestore";
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


export const getDocByIDFirebase = async (collectionName, docID) => {




    const docRef = doc(db, collectionName, docID);
    const docSnap = await getDoc(docRef);
    const object = docSnap.data();
debugger;

console.log(object);
    debugger;
    if (object) {
        debugger;
        return object;
    } else {
        debugger;
        return null;
    }
}