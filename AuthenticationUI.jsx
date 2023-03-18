import { useEffect, useLayoutEffect } from 'react'
import firebase from 'firebase/compat/app';
import { auth } from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { firebaseConfig } from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

export default function AuthenticationUI() {

    useEffect(() => {
        const uiConfig = {
            signInFlow: 'popup',
            signInSuccessUrl: '/signedIn',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
        }

        if (auth.AuthUI.getInstance()) {
            // checking if the instance exist then start that instance
            const ui = new auth.AuthUI.getInstance()
            ui.start('#firebaseui-auth-container', uiConfig)
        } else {
            // creating a new instance
            const ui = new auth.AuthUI(firebase.auth())
            ui.start('#firebaseui-auth-container', uiConfig)
        }
    }, [])

    return (
        <div id='firebaseui-auth-container'></div>
    )
}
