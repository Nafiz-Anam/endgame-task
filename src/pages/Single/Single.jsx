import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Single.css";
import { useEffect, useState } from "react";

const Single = () => {
    const { id } = useParams();

    // set single data
    const [singleDoctor, setSingleDoctor] = useState({});
    const [docSer, setDocSer] = useState([]);
    const [serData, setSerData] = useState([]);
    const [services, setServices] = useState([]);
    // console.log(services);
    console.log(docSer);
    
    // fetch all data here
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
        fetch(`http://localhost:5000/doctor/${id}`)
            .then((res) => res.json())
            .then((data) => setSingleDoctor(data.result[0]));

        fetch(`http://localhost:5000/services/`)
            .then((res) => res.json())
            .then((data) => setDocSer(data.result));
    }, []);

    // useEffect(() => {
    //     const thisDocSer = docSer.filter((singleSer) => {
    //         return singleSer?.doc_id === id;
    //     });
    //     // console.log(thisDocSer);
    //     setSerData(thisDocSer);
    // }, [docSer]);

    useEffect(() => {
        setServices(docSer[0]?.doc_services);
    }, [docSer]);
    // useEffect(() => {
    //     setServices(serData[0]?.doc_services);
    // }, [serData]);

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [serviceCost, setServiceCost] = useState("");

    const handleCheck = (e) => {
        const service = e.target.value;
        // console.log(service);
        setServiceName(service);
    };
    const handleDate = (e) => {
        const date = e.target.value;
        // console.log(date);
        setDate(date);
    };
    const handleTime = (e) => {
        const time = e.target.value;
        // console.log(time);
        setTime(time);
    };

    useEffect(() => {
        const findCost = services.filter((sPrice) => {
            return sPrice.label === serviceName;
        });
        console.log(findCost);
        setServiceCost(findCost[0]?.price);
    }, [serviceName]);

    const bookData = {
        date: date,
        time: time,
        service: serviceName,
        servicePrice: serviceCost,
        doctor: singleDoctor?.doc_name,
    };
    console.log(bookData);

    return (
        <div className="single-doc">
            <div className="banner-img">
                <div className="container">
                    <div className="about-banner">
                        <h1>Doctor Details</h1>
                        <p>
                            <b>Doctor</b> / Details
                        </p>
                    </div>
                </div>
            </div>
            {/* data loads here  */}
            <div className="details-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 details-area">
                            <div className="doctor-info row shadow bg-body ">
                                <div className="col-lg-5 col-sm-12">
                                    <img
                                        src={singleDoctor?.doc_img}
                                        // src={singleDoctor?.img}
                                        alt=""
                                    />
                                </div>
                                <div className="col-lg-7 col-sm-12">
                                    <h1>{singleDoctor?.doc_name}</h1>
                                    <div className="mt-3 mb-3 star">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half"></i>{" "}
                                        <b>{singleDoctor?.ratings}</b>
                                    </div>
                                    <h3>{singleDoctor?.doc_designation}</h3>
                                    <p>
                                        <i className="fal fa-envelope"></i>{" "}
                                        {singleDoctor?.doc_email}
                                    </p>
                                </div>
                            </div>
                            <div className="desc">
                                <h1>Overview of {singleDoctor?.doc_name}</h1>
                                <p>{singleDoctor?.doc_description}</p>
                            </div>
                            <div className="specialities">
                                <h1>Subspecialities</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard.
                                </p>
                                <div className="row">
                                    <div className="col-6">
                                        <ul>
                                            <li>Best Fitness Excercises</li>
                                            <li>
                                                Combine Fitness and Lifestyle
                                            </li>
                                            <li>Achieve a Specific Goal</li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul>
                                            <li>Best Fitness Excercises</li>
                                            <li>
                                                Combine Fitness and Lifestyle
                                            </li>
                                            <li>Achieve a Specific Goal</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* booking part area  */}
                        <div className="col-lg-4 ">
                            <div className="booking-form shadow bg-body ">
                                <h1>Pick your Choice</h1>
                                <form>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="formGroupExampleInput"
                                            className="form-label"
                                        >
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="formGroupExampleInput"
                                            placeholder="07/20/2021"
                                            onChange={handleDate}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="formGroupExampleInput2"
                                            className="form-label"
                                        >
                                            Time
                                        </label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="formGroupExampleInput2"
                                            placeholder="08.30 PM"
                                            onChange={handleTime}
                                        />
                                    </div>
                                    <h2>Choose Services</h2>
                                    {services &&
                                        services.map((item) => {
                                            return (
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <input
                                                        type="radio"
                                                        id={item?._id}
                                                        value={item?.label}
                                                        onChange={handleCheck}
                                                        name="serviceTitle"
                                                    ></input>
                                                    <h6
                                                        htmlFor={services?._id}
                                                        // className="form-label"
                                                        style={{
                                                            padding: "10px",
                                                        }}
                                                    >
                                                        {item?.label}
                                                        <br />
                                                        Cost :
                                                        <span>
                                                            {item?.price}.00$
                                                        </span>
                                                    </h6>
                                                    <br />
                                                </div>
                                            );
                                        })}
                                    <div>
                                        <Link
                                            to={{
                                                pathname: "/booking",
                                                query: {
                                                    bookData,
                                                },
                                            }}
                                        >
                                            {/* <Link
                                            to="/booking"
                                            state={{ from: { bookData } }}
                                        > */}
                                            <button className="btn course-btn m-2">
                                                Book Appointment
                                            </button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* booking part area  */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single;
