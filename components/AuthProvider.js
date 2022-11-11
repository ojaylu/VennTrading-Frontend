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
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // check session storage on first render
        if (user) {
            setAuthenticated(true);
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

    function loginWithEmail(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setUser(userCredential.user);
                success("Logged in");
                setAuthenticated(true);
            }).catch(err => {
                error(err.message);
            });
    }

    function loginWithThirdParty(providerName) {
        loginWithPopup(providerName)
            .then(({ user, token }) => {
                setUser(user);
                success("Logged in");
                setAuthenticated(true);
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
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };