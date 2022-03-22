import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Doctor.css";

const Doctor = () => {
    // fetching data  here
    const [allDoctors, setAllDoctors] = useState([]);
    console.log(allDoctors);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
        fetch("http://localhost:5000/doctor/")
            .then((res) => res.json())
            .then((data) => setAllDoctors(data.result));
    }, []);

    return (
        <div>
            <div className="courses-body pb-5">
                <div className="courses-banner">
                    <div className="container">
                        <h3 className="text-center">Find the Best Doctors</h3>
                        <h1 className="text-center">
                            The Best Doctors We Have
                        </h1>
                    </div>
                </div>
                <div className="container all-courses pt-5">
                    {/* all course load in here  */}
                    <div className="row">
                        {allDoctors.map((doctor) => (
                            <Service Doctor={doctor} key={doctor._id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;
