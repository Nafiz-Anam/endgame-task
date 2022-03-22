import { useEffect, useState } from "react";
import initializeAuth from "../auth/firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    GithubAuthProvider,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [saveDetails, setSaveDetails] = useState({});
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsloading] = useState(true);
    // all error states
    // const [gitError, setGitError] = useState("");
    // const [logError, setLogError] = useState("");
    // const [signError, setSignError] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const loginUsingGoogle = (location, history) => {
        setIsloading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                saveUser(result.user.email, result.user.displayName, "PUT");
                const redirect_uri = location?.state?.from || "/";
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsloading(false));
    };

    // const signinUsingGoogle = () => {
    //     setIsloading(true);
    //     return signInWithPopup(auth, googleProvider);
    //     // .then((result) => {
    //     //     setUser(result.user);
    //     //     // console.log(result.user);
    //     // })
    //     // .catch((error) => {
    //     //     setError(error.message);
    //     // })
    //     // .finally(() => setIsloading(false));
    // };

    //github login
    const loginUsingGithub = (location, history) => {
        setIsloading(true);
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);
                const redirect_uri = location?.state?.from || "/";
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsloading(false));
    };

    // const signinWithGithub = () => {
    //     setIsloading(true);
    //     signInWithPopup(auth, githubProvider)
    //         .then((result) => {
    //             setUser(result.user);
    //             // console.log(result.user);
    //         })
    //         .catch((error) => {
    //             setError(error.message);
    //         })
    //         .finally(() => setIsloading(false));
    // };

    // email singup
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const [userName, setUserName] = useState("");

    const handleEmail = (e) => {
        setUserEmail(e.target.value);
    };
    const handlePass = (e) => {
        setUserPass(e.target.value);
    };

    const handleName = (e) => {
        setUserName(e.target.value);
    };

    // create user with email/pass
    const createUser = (email, password, name, location, history) => {
        setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // console.log(result);
                const updateProfileData = () => {
                    updateProfile(auth.currentUser, {
                        displayName: name,
                    }).then((res) => {});
                };
                setUser(result.user);
                saveUser(email, name, "POST");
                updateProfileData();
                const redirect_uri = location?.state?.from || "/";
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsloading(false));
    };

    // create account
    // const handleRegister = (e) => {
    //     e.preventDefault();
    //     createUserWithEmailAndPassword(auth, userEmail, userPass)
    //         .then((result) => {
    //             setUser(result.user);
    //             updateProfileData();
    //             // setUser({ ...result.user, displayName: userName });
    //             // setUser(result.user);
    //             // console.log(result.user); updatefunction()
    //         })
    //         .catch((error) => {
    //             setError(error.message);
    //         });
    // };

    // update profile info here

    const updateProfileData = () => {
        updateProfile(auth.currentUser, {
            displayName: userName,
        }).then((res) => {});
    };

    // email/pass login
    const loginUsingEmail = (email, password, location, history) => {
        setIsloading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // console.log(result);

                setUser(result.user);
                const redirect_uri = location?.state?.from || "/";
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsloading(false));
    };

    // login user
    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     setIsloading(true);
    //     signInWithEmailAndPassword(auth, userEmail, userPass)
    //         .then((result) => {
    //             setUser(result.user);
    //             console.log(result.user);
    //         })
    //         .catch((error) => {
    //             setError(error.message);
    //         })
    //         .finally(() => setIsloading(false));
    // };

    //observer function here
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsloading(false);
        });
        return () => unsubscribed;
    }, [auth]);
    // log out function here
    const logout = () => {
        setIsloading(true);
        signOut(auth)
            .then(() => {
                setUser("");
            })
            .finally(() => setIsloading(false));
    };

    // const signout = () => {
    //     setIsloading(true);
    //     signOut(auth)
    //         .then(() => {
    //             setUser({});
    //         })
    //         .finally(() => setIsloading(false));
    // };

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user);
    //         } else {
    //             setUser({});
    //         }
    //         setIsloading(false);
    //     });
    // }, []);
    // checking admin
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`)
            .then((res) => res.json())
            .then((data) => setAdmin(data.admin));
    }, [user.email]);

    // save users to my database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("http://localhost:5000/user/", {
            method: method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then();
    };

    return {
        user,
        admin,
        logout,
        error,
        loginUsingGoogle,
        loginUsingGithub,
        loginUsingEmail,
        setSaveDetails,
        saveDetails,
        isLoading,
        createUser,
        setIsloading,
    };
};

export default useFirebase;
