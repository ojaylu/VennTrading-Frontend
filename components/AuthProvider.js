import React, { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "firebase-config";
import { message } from "antd";
import loginWithPopup from "utils/firebase/loginWithPopup";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // check session storage on first render
        setUser(auth.currentUser);
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

    function createUser(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                setUser(user);
                success("Created User");
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
        })
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
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };