import { collection, addDoc, getFirestore ,onSnapshot, doc,getDocs} from "firebase/firestore";
import { firebaseConfig } from "../../firebaseConfig";
import firebase from "firebase/compat/app";
import { initializeApp} from "firebase/app";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export function User() {
  const userCollection = collection(db,"users")
  return userCollection;
}

export async function addUser(name, age) {
  const user = User();
  const docRef = await addDoc(user, {
    name,
    age,
  });
  console.log(docRef.id);
}

export async function getUsers(){
    const user = User()
    const data = await getDocs(user)
    data.forEach(data=>{
        console.log(data.data())
    })
}
export async function subscribe(){
    // getting realtime update for a specific document
    // const userDoc = doc(db,"users","2uaxGv3jy7VQXciVAnxG") // collection // documentid
    // onSnapshot(userDoc,data=>{
    //     console.log(data.data());
    // })

    const users  = await getDocs(User())
    users.forEach(data=>{
        onSnapshot(doc(db,"users",data.id),data=>{console.log(data.data())})
    })
}