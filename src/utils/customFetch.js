import { collection, getDocs, getDoc, doc, where, query} from "firebase/firestore";

import db from "../utils/firebaseConfig";


let is_ok = true;

export const customFetch = (timeout, task) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(is_ok){
                resolve(task);
            }
            else{
                reject("error");
            }
        }, timeout);
    })
}

export const firestoreFetch = async () => {

    const querySnapshot = await getDocs(collection(db, "list"));

    return querySnapshot.docs.map( document => ({
      id : document.id,
      ...document.data()
    }))
 

  }

  export const firestoreFetchFilter = async (segun,dato) =>{
    const q = query(collection(db, "list"), where(segun, "==",dato));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map( item =>  ({
        id: item.id,
        ...item.data()
    }))
}

export const firestoreFetchFind = async (dato) =>{
    const docRef = doc(db, "list", dato);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log(docSnap.data());
     return { id: docSnap.id,...docSnap.data()}
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
    return 0;
}