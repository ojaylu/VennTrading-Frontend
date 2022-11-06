import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
import { auth } from "firebase-config";

const providers = {
    google: {
        provider: new GoogleAuthProvider(),
        getCredential: result => {
            return (
                GoogleAuthProvider.credentialFromResult(result)
            );
        }
    }
}

export default async function loginWithPopup(providerName) {
    return signInWithPopup(auth, providers[providerName].provider)
        .then(result => {
            const credential = providers[providerName].getCredential;
            const token = credential.accessToken;
            const user = result.user;
            return { user, token };
        });
}