import React from "react";
import { useForm } from "react-hook-form";

const AddPatient = () => {
    const { register, handleSubmit, reset } = useForm();
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
    return (
        <div className="add-event">
            <h1>Add New Patient</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row add-form">
                    <div className="col-lg-6 col-sm-12 right-side">
                        <label htmlFor="banner">Watch Image</label>
                        <input
                            type="text"
                            id="banner"
                            placeholder="Image Link"
                            {...register("image")}
                        />
                        <label htmlFor="eventTitle">Watch Name</label>
                        <input
                            type="text"
                            id="eventTitle"
                            placeholder="Watch Name"
                            {...register("watchname", {
                                required: true,
                            })}
                        />
                    </div>
                    <div className="col-lg-6 col-sm-12 left-side">
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            id="price"
                            placeholder="Price"
                            {...register("price", {
                                required: true,
                            })}
                        />
                        <label htmlFor="description">Description</label>
                        <textarea
                            type="text"
                            id="description"
                            placeholder="Enter Description"
                            {...register("description")}
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

export default AddPatient;
