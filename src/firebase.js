import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Debug logging for environment variables
console.log('Environment variables check:', {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ? 'Loaded' : 'Missing',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? 'Loaded' : 'Missing',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ? 'Loaded' : 'Missing',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ? 'Loaded' : 'Missing',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ? 'Loaded' : 'Missing',
  appId: import.meta.env.VITE_FIREBASE_APP_ID ? 'Loaded' : 'Missing',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID ? 'Loaded' : 'Missing',
});

console.log('Raw environment values:', {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
});

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || '',
};

console.log('Firebase config object:', firebaseConfig);

// Validate required config
const requiredFields = ['apiKey', 'authDomain', 'projectId'];
const missingFields = requiredFields.filter(field => !firebaseConfig[field] || firebaseConfig[field].trim() === '');

if (missingFields.length > 0) {
  console.error('Missing Firebase configuration fields:', missingFields);
  console.error('Please check your environment variables in Netlify dashboard');
  
  // Provide more helpful error message
  const errorMessage = `Missing Firebase configuration: ${missingFields.join(', ')}. 
  Please ensure these environment variables are set in your Netlify dashboard:
  ${missingFields.map(field => `VITE_FIREBASE_${field.toUpperCase().replace(/([A-Z])/g, '_$1')}`).join(', ')}`;
  
  throw new Error(errorMessage);
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();