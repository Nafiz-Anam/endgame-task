import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useHistory } from "react-router-dom";

const AddDoctor = () => {
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        fetch("http://localhost:5000/doctor/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Data Added");
                reset();
            });
    };
    return (
        <div className="add-event">
            <h1>Add New Doctor</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row add-form">
                    <div className="col-lg-6 col-sm-12 right-side">
                        <label htmlFor="banner">Doctor Image</label>
                        <input
                            type="text"
                            id="banner"
                            placeholder="Image Link"
                            {...register("doc_img", {
                                required: true,
                            })}
                        />
                        <label htmlFor="eventTitle">Doctor Name</label>
                        <input
                            type="text"
                            id="eventTitle"
                            placeholder="Watch Name"
                            {...register("doc_name", {
                                required: true,
                            })}
                        />
                    </div>
                    <div className="col-lg-6 col-sm-12 left-side">
                        <label htmlFor="price">Doctor Designation</label>
                        <input
                            type="text"
                            id="price"
                            placeholder="Price"
                            {...register("doc_designation", {
                                required: true,
                            })}
                        />
                        <label htmlFor="description">Doctor Description</label>
                        <textarea
                            type="text"
                            id="description"
                            placeholder="Enter Description"
                            {...register("doc_description", {
                                required: true,
                            })}
                        />
                    </div>
                    <div className="col-lg-6 col-sm-12 right-side">
                        <label htmlFor="banner">Doctor Email</label>
                        <input
                            type="text"
                            id="banner"
                            placeholder="Image Link"
                            {...register("doc_email", {
                                required: true,
                            })}
                        />
                        <label htmlFor="eventTitle">Doctor Phone</label>
                        <input
                            type="text"
                            id="eventTitle"
                            placeholder="Watch Name"
                            {...register("doc_phone", {
                                required: true,
                            })}
                        />
                    </div>
                </div>
                <div>
                    <input
                        className="btn btn-add"
                        type="submit"
                        value="Add Listing"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;
