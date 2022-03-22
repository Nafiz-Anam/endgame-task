import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import Footer from "./components/Footer/Footer";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import AuthProvider from "./context/AuthProvider";
import Booking from "./components/Booking/Booking";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Doctors from "./pages/Doctors/Doctors";
import Single from "./pages/Single/Single";
import Notfound from "./pages/404/Notfound";

const App = () => {
    return (
        <div>
            <AuthProvider>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/admindashboard">
                            <Dashboard />
                        </Route>
                        <Route path="/userdashboard">
                            <UserDashboard />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/signup">
                            <Signup />
                        </Route>
                        <Route path="/signin">
                            <Signin />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        {/* private routing here  */}
                        <Route path="/doctors">
                            <Doctors />
                        </Route>
                        {/* <Route path="/booking">
                            <Booking />
                        </Route>
                        <Route path="/single/:id">
                            <Single />
                        </Route> */}
                        <PrivateRoute path="/booking">
                            <Booking />
                        </PrivateRoute>
                        <PrivateRoute path="/single/:id">
                            <Single />
                        </PrivateRoute>
                        {/* private routing here  */}
                        {/* error page 
                        <Route path="/*">
                            <Notfound />
                        </Route>
                        {/* error page  */}
                    </Switch>
                    <Footer />
                </Router>
            </AuthProvider>
        </div>
    );
};

export default App;
