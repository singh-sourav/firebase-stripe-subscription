"use client"
import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")


  const handleLogin = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyA9pUyaXKDBMvwEG13nSVHLOUILyPkZdHo",
      authDomain: "fir-stripe-subscription.firebaseapp.com",
      projectId: "fir-stripe-subscription",
      storageBucket: "fir-stripe-subscription.appspot.com",
      messagingSenderId: "118490364983",
      appId: "1:118490364983:web:4487d189c8d460337d53b2",
      measurementId: "G-GPVRQK48RY"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    console.log(email, password)

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
  }

  return (
    <section>
      <label className="text-xl">Email</label>
      <input type="text" id="email" name="email" value={email} className="text-black" onChange={(e) => setEmail(e.target.value)} />
      <label className="text-xl">Password</label>
      <input type="password" id="password" name="password" value={password} className="text-black" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={handleLogin}>Submit</button>
    </section>
  )
}

export default Login;