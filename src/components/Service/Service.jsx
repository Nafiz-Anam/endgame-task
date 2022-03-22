import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
    // destructuring data here
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);
    const {
        _id,
        doc_name,
        doc_img,
        doc_designation,
        doc_category,
        doc_description,
    } = props.Doctor;
    console.log("doc_img =>", doc_img);
    return (
        <div className="col-lg-4">
            {/* single course card  */}
            <div className="course-card">
                <div style={{ display: "flex", padding: "20px" }}>
                    <img
                        style={{
                            width: "300px",
                            height: "300px",
                            margin: "0px auto",
                        }}
                        src={doc_img}
                        className="card-img-top"
                        alt=""
                    />
                </div>
                <div className="card-body py-4">
                    <h1 className="card-title"> {doc_name}</h1>
                    <h5 className="card-title"> {doc_category}</h5>
                    <p>
                        <b>{doc_designation}</b>
                    </p>
                    <p className="mt-2 star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i> <b>{4}</b>
                    </p>
                    <p className="py-3">{doc_description.slice(0, 130)}...</p>

                    <Link to={`/single/${_id}`}>
                        <button className="btn course-btn">
                            Book Appointment
                        </button>
                    </Link>

                    {/* <button className="btn course-btn btn2 m-2">
                        <Link to="/single">Details</Link>
                    </button> */}

                    {/* // <Link to={`/single/${_id}`}>
                    //     <button className="btn course-btn btn2 m-2">
                    //         Details
                    //     </button>
                    // </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Service;
