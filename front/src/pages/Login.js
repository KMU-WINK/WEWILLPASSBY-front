import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, provider, db } from '../fbase'
import { doc, setDoc } from "firebase/firestore";

const login = () => {
    signInWithPopup(auth, provider)
    .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user.displayName, user.email);
        await setDoc(doc(db, 'users', user.uid), {
            email: user.email,
            grade: '초보따릉이',
            name: user.displayName,
            nickname: user.displayName, 
        });
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

export default function Login(props) {
    
    return (
        <div>
            <button href="" onClick={() => login()}>제발 되세요..</button>
        </div>
    );
}
