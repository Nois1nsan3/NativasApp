import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

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
const db = getFirestore.firebase()

db.collection('users').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`)
  })
})
