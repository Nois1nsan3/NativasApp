import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD4uOr7wikkzurdAtHmZdMdCUbd6lGRLjQ',
  authDomain: 'proyecto-nativas.firebaseapp.com',
  projectId: 'proyecto-nativas',
  storageBucket: 'proyecto-nativas.appspot.com',
  messagingSenderId: '359659966142',
  appId: '1:359659966142:web:1ff394f76bfe1362f558ef'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// get users from firebase
async function getUsers (db) {
  const usersCol = collection(db, 'users')
  const usersSnapshot = await getDocs(usersCol)
  const usersList = usersSnapshot.docs.map(doc => doc.data())
  return usersList
}

getUsers(db)
