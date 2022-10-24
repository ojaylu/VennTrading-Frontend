import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import isEmpty from "lodash/isEmpty";
import _ from "lodash";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const isAuthenticated = useRef(false);
    const [isLoading, setLoading] = useState(true);

    // must be used 
    const setAuthenticated = (bool) => {
        isAuthenticated.current = bool;
    }

    useEffect(() => {
        // check is user is logged in
        setLoading(false);
    }, []);

    function login() {
        setLoading(true);
        setUser({
            name: 'hi'
        });
        setAuthenticated(true);
        setLoading(false);
    }

    function logout() {
        setLoading(true);
        setAuthenticated(false);
        setLoading(false);
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: isAuthenticated.current,
                user,
                login,
                logout,
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };