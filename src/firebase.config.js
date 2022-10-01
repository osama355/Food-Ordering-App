import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBet8bWGN40EAPIYTZ1rFnjWMgWvrl5DFQ",
  authDomain: "restaurant-app-4e569.firebaseapp.com",
  databaseURL: "https://restaurant-app-4e569-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-4e569",
  storageBucket: "restaurant-app-4e569.appspot.com",
  messagingSenderId: "533233583265",
  appId: "1:533233583265:web:6532eedd02de978d1f1ce0",
};

const app =getApps().length>0? getApp() : initializeApp(firebaseConfig);
const firestore= getFirestore(app);
const storage=getStorage(app);
export {app,firestore,storage};