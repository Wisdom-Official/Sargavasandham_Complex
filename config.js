import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBtK4g7FOI5bMVL60_buedqaslLowhPdqs",
  authDomain: "sargavasandham-18ce0.firebaseapp.com",
  projectId: "sargavasandham-18ce0",
  storageBucket: "sargavasandham-18ce0.firebasestorage.app",
  messagingSenderId: "879772529945",
  appId: "1:879772529945:web:14384065da0882aacc0188"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Cloudinary (unsigned upload preset)
export const CLOUD = { name: "guqmosat", preset: "dvtnmwnx" };

// Admin sign-in: the dashboard asks only for the password.
// Create this user in Firebase Console > Authentication with password: controller
export const ADMIN_EMAIL = "admin@sargavasantham.app";

export const STAGES = { "1": "സ്റ്റേജ് 1", "2": "സ്റ്റേജ് 2" };

// Image URL helpers (Cloudinary transformations)
export const thumb = (u, w = 480) => u.replace("/upload/", `/upload/w_${w},c_limit,q_auto,f_auto/`);
export const view = (u) => u.replace("/upload/", "/upload/w_1800,c_limit,q_auto,f_auto/");
export const dl = (u) => u.replace("/upload/", "/upload/fl_attachment/");
