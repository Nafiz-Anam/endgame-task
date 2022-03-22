import React, { useEffect, useState } from "react";
// import UserBookings from "../../Components/UserBookings/UserBookings";
import "./UserDashboard.css";
import useAuth from "../../Hooks/useAuth";
// import Payment from "../../Components/Payment/Payment";
import Review from "../../components/Review/Review";
import UserApmt from "../../components/UserApmt";

const UserDashboard = () => {
    const { user } = useAuth();
    // fetching specific data  here
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/appointment/")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const mainD = data?.result;
                const specificApt = mainD.filter(
                    (apt) => apt?.pat_email === user?.email
                );
                setAllOrders(specificApt);
                console.log(specificApt);
            });
    }, []);
    // deleting a booking
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure, you want to cancel?");
        if (proceed) {
            fetch(`https://serene-shelf-88269.herokuapp.com/orders/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Canceled Successfully.");
                        const remainingBookings = allOrders.filter(
                            (booking) => booking._id !== id
                        );
                        setAllOrders(remainingBookings);
                    }
                });
        }
    };
    return (
        <div className="profile-page">
            <div className="container">
                <div className="d-flex align-items-start admin-panel">
                    <div
                        className="nav flex-column me-3 menu-side"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <button
                            className="nav-link active btn"
                            id="v-pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-home"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                        >
                            <i className="fas fa-shopping-cart"></i> My
                            Appointments
                        </button>

                        <button
                            className="nav-link btn"
                            id="v-pills-review-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-review"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-review"
                            aria-selected="false"
                        >
                            <i className="fas fa-stars"></i> Leave a Review
                        </button>
                    </div>
                    <div
                        className="tab-content content-side"
                        id="v-pills-tabContent"
                    >
                        <div
                            className="tab-pane fade show active"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                        >
                            <div className="booking-list">
                                <h1 className="profile-title text-center">
                                    All Your Purchases {user.displayName}
                                </h1>
                                <div className="booking-list">
                                    <UserApmt />
                                </div>
                            </div>
                        </div>

                        <div
                            className="tab-pane fade event"
                            id="v-pills-review"
                            role="tabpanel"
                            aria-labelledby="v-pills-review-tab"
                        >
                            <Review />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
