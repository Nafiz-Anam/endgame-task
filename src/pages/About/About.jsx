import { useEffect } from "react";
import "./About.css";
import choose01 from "../../assets/Images/choose01.png";
import img1 from "../../assets/Images/2 (1).png";
import img2 from "../../assets/Images/2 (2).png";
import img3 from "../../assets/Images/2 (3).png";

const About = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <div>
            <div className="banner-img">
                <div className="container">
                    <div className="about-banner">
                        <h1>About Us</h1>
                        <p>
                            <b>Home</b> / About Us
                        </p>
                    </div>
                </div>
            </div>
            <div className="works">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <h6>Work Process</h6>
                            <h1>How it Works?</h1>
                        </div>
                        <div className="col-lg-4">
                            <p>
                                Donec rutrum congue leo eget malesuada. Nulla
                                porttitor accumsan tincidunt. Vestibulum ante
                                ipsum primis.
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <div className="btn btn-info btn-quote">
                                make appointment
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="about-info">
                                <div className="icon">
                                    <img src={img3} alt="" />
                                </div>
                                <div className="info">
                                    <h3>Search Best Online Professional</h3>
                                    <p>
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-info">
                                <div className="icon">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="info">
                                    <h3>Get Instant Appointment</h3>
                                    <p>
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-info">
                                <div className="icon">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="info">
                                    <h3>Leave Your Feedback</h3>
                                    <p>
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* choose area  */}
            <div className="choose-are">
                <div className="container ">
                    <div className="row choose">
                        <div className="col-lg-6">
                            <h1>Why Choose Docfind Clinic?</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. It is a long established fact
                                that a reader will be Lorem ipsum dolor sit amet
                                consectetur.
                            </p>
                            <div className="choose-info">
                                <div className="icon">
                                    <i className="fal fa-heartbeat p-2"></i>
                                </div>
                                <div className="info">
                                    <h3>Quality Control System</h3>
                                    <p>
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content.
                                    </p>
                                </div>
                            </div>
                            <div className="choose-info">
                                <div className="icon">
                                    <i className="fal fa-users"></i>
                                </div>
                                <div className="info">
                                    <h3>Highly Professional Staff</h3>
                                    <p>
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-5">
                            <div className="choose-img">
                                <img src={choose01} alt="choose01" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* choose area  */}
        </div>
    );
};

export default About;
