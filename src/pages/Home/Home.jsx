import React, { useEffect, useState } from "react";
import "./Home.css";
import img1 from "../../assets/Images/540x540.jpg";
import img2 from "../../assets/Images/635x450.jpg";
import icon1 from "../../assets/Images/1 (1).png";
import icon2 from "../../assets/Images/1 (2).png";
import icon3 from "../../assets/Images/1 (3).png";
import Service from "../../components/Service/Service";
import test1 from "../../assets/Images/test (1).jpg";
import test2 from "../../assets/Images/test (2).jpg";
import test3 from "../../assets/Images/test (3).jpg";
import doc1 from "../../assets/Images/doc (1).jpg";
import doc2 from "../../assets/Images/doc (2).jpg";
import { Link } from "react-router-dom";

const Home = () => {
    // set all data
    const [allDoctors, setAllDoctors] = useState([]);
    console.log(allDoctors);

    // fetch all data here
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
            <div className="home">
                <div className="container">
                    <div className="row banner">
                        <div className="col-lg-6 col-sm-12">
                            <h4>Markets & Resources</h4>
                            <h1>Find The Best Doctor near By You</h1>
                            <div className="home-btn">
                                <button className="btn btn-info btn-quote">
                                    get a quote
                                </button>
                                <button className="btn btn-info btn-more">
                                    read more
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <img src={img1} alt="img1" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 2nd section  */}
            <div className="home-category">
                <div className="container position">
                    <div className="category shadow bg-body rounded">
                        <div className="row">
                            <div className="col-lg-8">
                                <h1 className="title">
                                    Praesent tempor dictum tellus ut molestie
                                </h1>
                            </div>
                            <div className="col-lg-4 button-area">
                                <button className="btn btn-info btn-quote-2">
                                    get a quote
                                </button>
                            </div>
                        </div>
                        {/* home-info start  */}
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="home-info">
                                    <div className="icon">
                                        <img src={icon1} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>Therapiya</h1>
                                        <p>
                                            Therapy is the process of meeting
                                            with a counsellor or psychotherapist
                                            for the purpose of resolving
                                            problematic behaviours, beliefs,
                                            feelings and related physical
                                            symptoms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="home-info">
                                    <div className="icon">
                                        <img src={icon2} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>Dentistry</h1>
                                        <p>
                                            Dentistry, also known as dental
                                            medicine and oral medicine, is a
                                            branch of medicine that consists of
                                            the study, diagnosis, prevention,
                                            and treatment of diseases,
                                            disorders, and conditions of the
                                            oral
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="home-info">
                                    <div className="icon">
                                        <img src={icon3} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>Virology</h1>
                                        <p>
                                            Virology is the scientific study of
                                            viruses – submicroscopic, parasitic
                                            organisms of genetic material
                                            contained in a protein coat – and
                                            virus-like agents.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home counter  */}
            <div className="home-counter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 text-center">
                            <i className="far fa-procedures"></i>
                            <h1>3500</h1>
                            <p>Happy Customers</p>
                        </div>
                        <div className="col-lg-3 text-center">
                            <i className="fal fa-file-medical-alt"></i>
                            <h1>599</h1>
                            <p>Project Done</p>
                        </div>
                        <div className="col-lg-3 text-center">
                            <i className="fal fa-heartbeat"></i>
                            <h1>40</h1>
                            <p>Awards Win</p>
                        </div>
                        <div className="col-lg-3 text-center">
                            <i className="fal fa-ambulance"></i>
                            <h1>699</h1>
                            <p>Clients Work</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* home values  */}

            <div className="home-value">
                <div className="container">
                    <div className="row value">
                        <div className="col-lg-6">
                            <img src={img2} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h1>
                                We Provide Essential Service For Your Health
                            </h1>
                            <div className="row">
                                <div className="col-6">
                                    <h2>Quality Control System</h2>
                                    <p>
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content.
                                    </p>
                                </div>
                                <div className="col-6">
                                    <h2>Quality Control System</h2>
                                    <p>
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content.
                                    </p>
                                </div>
                            </div>
                            <button className="btn btn-info btn-quote">
                                get a quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* show 6 doctor here  */}
            <div className="home-services">
                <div className="container">
                    <div className="courses-body pb-5">
                        <div className="courses-banner">
                            <div className="container">
                                <h3 className="text-center">
                                    Find the Best Doctors
                                </h3>
                                <h1 className="text-center service-h1">
                                    The Best Doctors We Have
                                </h1>
                            </div>
                        </div>
                        <div className="container all-courses pt-5">
                            {/* all course load in here  */}
                            <div className="row">
                                {allDoctors.slice(0, 6).map((doctor) => (
                                    <Service Doctor={doctor} key={doctor._id} />
                                ))}
                            </div>
                            <div className="load-btn text-center">
                                <Link to="/doctors">
                                    <button className="btn btn-quote">
                                        Show All Doctors
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* testimonial section here  */}
            <div className="testimonial">
                <div className="container">
                    <h1 className="text-center pt-4 pb-5">
                        What Our Clients Say
                    </h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single-box">
                                <div className="top-part d-flex">
                                    <img src={doc1} alt="" />
                                    <div className="info">
                                        <h3>Matthew Reyes</h3>
                                        <p>Obstetrics & Gynaecology</p>
                                    </div>
                                </div>
                                <p className="feed">
                                    "It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout.Lorem
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit."
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-box">
                                <div className="top-part d-flex">
                                    <img src={doc2} alt="" />
                                    <div className="info">
                                        <h3>Janice Hughes</h3>
                                        <p>Gynaecology</p>
                                    </div>
                                </div>
                                <p className="feed">
                                    "It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout.Lorem
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonial section here  */}

            {/* newsletter area  */}
            <div className="news-area">
                <div className="container">
                    <div className="newsletter">
                        <div className="row">
                            <div className="col-lg-5">
                                <h1>
                                    Get notified about the event! Subscribe
                                    Today
                                </h1>
                            </div>
                            <div className="col-lg-7 form-box">
                                <form className="home-subs">
                                    <div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <button className="btn btn-news">
                                        SUBSCRIBE
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* newsletter area  */}

            {/* latest post area  */}
            <div className="posts">
                <div className="container">
                    <h1 className="text-center pb-5">
                        Our Insights & Articles
                    </h1>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <img
                                    src={test1}
                                    className="card-img-top"
                                    alt="test1"
                                />
                                <div className="meta">
                                    <div className="meta-box">
                                        <i className="fal fa-user"></i>
                                        <p>By Matthew Reyes</p>
                                    </div>
                                    <div className="meta-box">
                                        <i className="fal fa-folder-open"></i>
                                        <p>Destinations</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        The Connection Between Post-traumatic
                                    </h5>
                                    <button className="btn btn-post">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <img
                                    src={test2}
                                    className="card-img-top"
                                    alt="test1"
                                />
                                <div className="meta">
                                    <div className="meta-box">
                                        <i className="fal fa-user"></i>
                                        <p>By Matthew Reyes</p>
                                    </div>
                                    <div className="meta-box">
                                        <i className="fal fa-folder-open"></i>
                                        <p>Destinations</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Adjusting to life with a spinal cord
                                        injury
                                    </h5>
                                    <button className="btn btn-post">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <img
                                    src={test3}
                                    className="card-img-top"
                                    alt="test1"
                                />
                                <div className="meta">
                                    <div className="meta-box">
                                        <i className="fal fa-user"></i>
                                        <p>By Matthew Reyes</p>
                                    </div>
                                    <div className="meta-box">
                                        <i className="fal fa-folder-open"></i>
                                        <p>Destinations</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Having overs eight and depression can
                                    </h5>
                                    <button className="btn btn-post">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* latest post area  */}
        </div>
    );
};

export default Home;
