import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useForm } from "react-hook-form";
import MakeAdmin from "../../components/MakeAdmin/MakeAdmin";
import ManageProducts from "../../components/ManageProducts/ManageProducts";
import Appointments from "../../components/Appointments";
import AddDoctor from "../../components/AddDoctor";
import AddPatient from "../../components/AddPatient";
import ManageDoc from "../../components/ManageDoc";
import ManagePatient from "../../components/ManagePatient";

const Dashboard = () => {
    const { register, handleSubmit, reset } = useForm();
    const [allOrders, setAllOrders] = useState([]);
    const onSubmit = (data) => {
        console.log(data);
        fetch("https://serene-shelf-88269.herokuapp.com/shop", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("Successfully added new listing.");
                    reset();
                }
            });
    };
    // fetching all bookings
    // fetching data  here
    // const [allBookings, setAllBookings] = useState([]);
    useEffect(() => {
        fetch("https://serene-shelf-88269.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => {
                setAllOrders(data);
                // console.log(data);
            });
    }, []);
    //delete single booking
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
                        const remainingOrders = allOrders.filter(
                            (order) => order._id !== id
                        );
                        setAllOrders(remainingOrders);
                    }
                });
        }
    };
    // single data
    const [order, setOrder] = useState({});
    // update status
    const handleStatus = (id) => {
        fetch(`https://serene-shelf-88269.herokuapp.com/orders/${id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setOrder(data);
            });
        const updatedStatus = { ...order };
        updatedStatus.status = "Shipped";
        setOrder(updatedStatus);
        fetch(`https://serene-shelf-88269.herokuapp.com/orders/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedStatus),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("Shipped Successfully.");
                    fetch("https://serene-shelf-88269.herokuapp.com/orders")
                        .then((res) => res.json())
                        .then((data) => {
                            setAllOrders(data);
                            // console.log(data);
                        });
                    // const remainingBookings = allBookings.filter();
                    // setAllBookings(remainingBookings);
                }
            });
    };
    return (
        <div className="admin-page">
            <div className="container">
                <div className="d-flex align-items-start admin-panel">
                    <div
                        className="nav flex-column me-3 menu-side"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <button
                            className="nav-link active btn px-0"
                            id="v-pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-home"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                        >
                            <i className="fas fa-shopping-cart"></i> Manage
                            Appointments
                        </button>
                        <button
                            className="nav-link btn px-0"
                            id="v-pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-profile"
                            aria-selected="false"
                        >
                            <i className="fal fa-plus"></i> Add Doctor
                        </button>
                        {/* <button
                            className="nav-link btn px-0"
                            id="v-pills-std-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-std"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-std"
                            aria-selected="false"
                        >
                            <i className="fal fa-plus"></i> Add Patient
                        </button> */}
                        <button
                            className="nav-link btn px-0"
                            id="v-pills-products-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-products"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-products"
                            aria-selected="false"
                        >
                            <i className="fas fa-cogs"></i> Manage Doctors
                        </button>
                        {/* <button
                            className="nav-link btn px-0"
                            id="v-pills-admin-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-admin"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-admin"
                            aria-selected="false"
                        >
                            <i className="fas fa-user-cog"></i> Manage Patients
                        </button> */}
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
                                <Appointments />
                            </div>
                        </div>
                        <div
                            className="tab-pane fade event"
                            id="v-pills-std"
                            role="tabpanel"
                            aria-labelledby="v-pills-std-tab"
                        >
                            <AddPatient />
                        </div>
                        <div
                            className="tab-pane fade event"
                            id="v-pills-profile"
                            role="tabpanel"
                            aria-labelledby="v-pills-profile-tab"
                        >
                            <AddDoctor />
                        </div>
                        <div
                            className="tab-pane fade event"
                            id="v-pills-products"
                            role="tabpanel"
                            aria-labelledby="v-pills-admin-tab"
                        >
                            <ManageDoc />
                        </div>
                        <div
                            className="tab-pane fade event"
                            id="v-pills-admin"
                            role="tabpanel"
                            aria-labelledby="v-pills-admin-tab"
                        >
                            <ManagePatient />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
