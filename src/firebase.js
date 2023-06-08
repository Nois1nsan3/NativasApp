import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyD4uOr7wikkzurdAtHmZdMdCUbd6lGRLjQ',
  authDomain: 'proyecto-nativas.firebaseapp.com',
  projectId: 'proyecto-nativas',
  storageBucket: 'proyecto-nativas.appspot.com',
  messagingSenderId: '359659966142',
  appId: '1:359659966142:web:1ff394f76bfe1362f558ef'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
