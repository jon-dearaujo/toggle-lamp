import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {

};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);


