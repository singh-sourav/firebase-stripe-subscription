"use client"
import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")


  const handleSignUp = () => {
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
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
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
      <button type="submit" onClick={handleSignUp}>Submit</button>
    </section>
  )
}

export default SignUp;