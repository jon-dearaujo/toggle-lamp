import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJePLDvL99XimEub8qfKWUMJ1KVILT-jY",
  authDomain: "aula-cesar-intero.firebaseapp.com",
  databaseURL: "https://aula-cesar-intero-default-rtdb.firebaseio.com",
  projectId: "aula-cesar-intero",
  storageBucket: "aula-cesar-intero.appspot.com",
  messagingSenderId: "394089619495",
  appId: "1:394089619495:web:de2560de6b2bf0cd50ee02",
  measurementId: "G-KKR0YD58H0"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);


