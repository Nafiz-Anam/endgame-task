import { useEffect } from "react";
import "./Contact.css";

const Contact = () => {
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
                    <div className="contact-banner">
                        <h1>Contact Us</h1>
                        <p>
                            <b>Home</b> / Contact Us
                        </p>
                    </div>
                </div>
            </div>
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-info">
                                <div className="icon">
                                    <i className="far fa-hospital"></i>
                                </div>
                                <div className="info">
                                    <h1>Our Address</h1>
                                    <p>
                                        PSD Building, 2 Tower St, <br />
                                        United States.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-info">
                                <div className="icon">
                                    <i className="fal fa-phone-alt"></i>
                                </div>
                                <div className="info">
                                    <h1>Our Phone</h1>
                                    <p>
                                        Telephone: 0029129102320
                                        <br /> Mobile: 000 2324 39493
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-info">
                                <div className="icon">
                                    <i className="fal fa-envelope"></i>
                                </div>
                                <div className="info">
                                    <h1>Our Email</h1>
                                    <p>
                                        Our Email Main Email:
                                        <br />
                                        example@example.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fonm area here  */}

            <div className="form-area container">
                <h5 className="text-center">Call to Action</h5>
                <h1 className="text-center">Make a Request</h1>
                <div className="form">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                placeholder="Name"
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="col-6">
                            <input
                                type="text"
                                className="form-control"
                                id="inputSubject"
                                placeholder="Subject"
                            />
                        </div>
                        <div className="col-6">
                            <input
                                type="text"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="col-12">
                            <textarea
                                className="form-control"
                                id="inputMessage"
                                placeholder="Message"
                                rows="8"
                            />
                        </div>
                        <div className="col-12 text-center">
                            <button type="send" className="btn btn-quote">
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
