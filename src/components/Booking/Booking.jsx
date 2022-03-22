import React, { useEffect } from "react";
import "./Booking.css";
import { useLocation, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";

const Booking = () => {
    const { user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    // console.log(location);
    const dataFrom = location?.query?.bookData;
    // console.log(dataFrom);
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);
    const onSubmit = (data) => {
        console.log(data);
        fetch("http://localhost:5000/appointment/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    reset();
                    history.push("/userdashboard");
                }, 1000);
            });
    };
    return (
        <div className="booking-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="information shadow bg-body rounded">
                            <div className="shipping">
                                <h1>Your Information :</h1>
                                {/* font here  */}
                                <form
                                    className="row g-3"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="inputName"
                                            className="form-label"
                                        >
                                            Patient Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputName"
                                            required
                                            {...register("pat_name")}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="inputEmail4"
                                            className="form-label"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail4"
                                            required
                                            value={user?.email}
                                            {...register("pat_email")}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="inputName"
                                            className="form-label"
                                        >
                                            Appointment Date
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputName"
                                            required
                                            value={dataFrom?.date}
                                            {...register("apnt_date")}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="inputName"
                                            className="form-label"
                                        >
                                            Appointment Time
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputName"
                                            required
                                            value={dataFrom?.time}
                                            {...register("apnt_time")}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="inputName"
                                            className="form-label"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputName"
                                            placeholder="+880*********"
                                            required
                                            {...register("pat_phone")}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="inputName"
                                            className="form-label"
                                        >
                                            Doctor Chosen
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputName"
                                            value={dataFrom?.doctor}
                                            {...register("doc_name")}
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label
                                            htmlFor="inputAddress"
                                            className="form-label"
                                        >
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputAddress"
                                            required
                                            placeholder="1234 Main St"
                                            {...register("pat_address")}
                                        />
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-booking"
                                            type="submit"
                                        >
                                            Confirm And Pay
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* booking summary part here  */}
                    <div className="col-lg-5">
                        <div className="summary shadow bg-body rounded">
                            <h1>Booking Summary</h1>
                            <div className="price-data d-flex">
                                <label
                                    className="form-check-label"
                                    htmlFor="autoSizingCheck2"
                                >
                                    Date
                                </label>{" "}
                                <p>
                                    <b>{dataFrom?.date}</b>
                                </p>
                            </div>
                            <div className="price-data d-flex">
                                <label
                                    className="form-check-label"
                                    htmlFor="autoSizingCheck2"
                                >
                                    Time
                                </label>{" "}
                                <p>
                                    <b>{dataFrom?.time}</b>
                                </p>
                            </div>
                            <div className="price-data d-flex">
                                <label
                                    className="form-check-label"
                                    htmlFor="autoSizingCheck2"
                                >
                                    Doctor
                                </label>{" "}
                                <p>
                                    <b>{dataFrom?.doctor}</b>
                                </p>
                            </div>

                            <hr />

                            <div className="price-data d-flex">
                                <label
                                    className="form-check-label"
                                    htmlFor="autoSizingCheck2"
                                >
                                    {dataFrom?.service}
                                </label>{" "}
                                <p>
                                    <b>{dataFrom?.servicePrice}$</b>
                                </p>
                            </div>

                            <hr />
                            <div className="price-data d-flex">
                                <label
                                    className="form-check-label"
                                    htmlFor="autoSizingCheck2"
                                >
                                    Total
                                </label>{" "}
                                <p>
                                    <b>{dataFrom?.servicePrice}$</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
