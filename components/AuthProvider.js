import React, { createContext, useContext, useState, useEffect } from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    updateProfile,
    sendEmailVerification
} from "firebase/auth";
import { auth } from "firebase-config";
import { message } from "antd";
import loginWithPopup from "utils/firebase/loginWithPopup";
import { useRouter } from "next/router";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(auth.currentUser);
    const [isAuthenticated, setAuthenticated] = useState({user: false, creds: false});
    const [isLoading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // check session storage on first render
        if(user) {
            setAuthenticated(isAuthenticated => ({ ...isAuthenticated, user: true }));
        }
        
        setLoading(false);
    }, []);

    const resetUser = () => {
        setUser(null);
    };

    const success = (msg) => {
        message.success(msg)
    };

    const error = (msg) => {
        message.error(msg)
    }

    // function getCredCookie() {
    //     fetch("http://localhost:4000/logged-in", { credentials: "include" })
    //         .then(
    //             res => res.json()
    //         )
    //         .then(
    //             data => console.log(data)
    //         );
    // }

    // function clearCredCookie() {
    //     fetch("http://localhost:4000/logged-out", { credentials: "include" })
    //         .then(
    //             res => res.json()
    //         )
    //         .then(
    //             data => console.log(data)
    //         );
    // }

    function credsExist() {
        return loggedInRequest("http://localhost:4000/binance-keys")
            .then(res => res.ok? true: false);
    }

    function loginWithEmail(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then(async(userCredential) => {
                setUser(userCredential.user);
                success("Logged in");
                await credsExist()? setAuthenticated({user: true, creds: true}): setAuthenticated({user: true, creds: false});
            }).catch(err => {
                error(err.message);
            });
    }

    function loginWithThirdParty(providerName) {
        loginWithPopup(providerName)
            .then(async ({ user, token }) => {
                setUser(user);
                success("Logged in");
                await credsExist()? setAuthenticated({user: true, creds: true}): setAuthenticated({user: true, creds: false});
            }).catch(err => {
                error(err.message);
            });
    }

    function createUser({email, password}) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                setUser(user);
                success("Created User");
                router.push("/sign-up/2");
            }).catch(err => {
                error(err.message);
            });
    }

    function updateUserProfile(fields) {
        updateProfile(auth.currentUser, fields)
            .then(() => {
                success("Profile Updated");
                sendVerification();
                router.push("/sign-up/3");
            }).catch(err => {
                error(err.message);
            });
    }

    function logout() {
        signOut(auth)
            .then(() => {
                success("Logged out");
                setAuthenticated(false);
                // clearCredCookie();
                resetUser();
            }).catch(err => {
                error(err.message);
            });
    }

    function sendVerification() {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                success("Verification Sent");
            });
    }

    function saveKeySecret() {
        loggedInRequest("http://localhost:4000/binance-keys")
    }

    async function loggedInRequest(url, data={}) {
        try {
            const token = await auth.currentUser.getIdToken(true);
            const { headers, ...rest } = data;
            return fetch(url, {...rest, headers: {...headers, "X-Token": token}});
        } catch(e) {
            error("Error with request");
            throw Error(e);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                loginWithEmail,
                loginWithThirdParty,
                logout,
                createUser,
                updateUserProfile,
                sendVerification,
                isLoading,
                loggedInRequest
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };