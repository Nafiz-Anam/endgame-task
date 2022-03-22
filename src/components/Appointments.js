import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import Table from "./Table";

const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
        fetch(`http://localhost:5000/appointment/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Data Deleted");
            });
    }
};

const columns = [
    {
        Header: "Appointed Doctor",
        accessor: "doc_name",
        sort: false,
    },
    {
        Header: "Patient name",
        accessor: "pat_name",
        sort: false,
    },
    {
        Header: "Patient Email",
        accessor: "pat_email",
        sort: false,
    },
    {
        Header: "Patient Phone",
        accessor: "pat_phone",
        sort: false,
    },
    {
        Header: "Appoint Date",
        accessor: "apnt_date",
        sort: false,
    },
    {
        Header: "Appoint Time",
        accessor: "apnt_time",
        sort: false,
    },

    {
        Header: "Action",
        Cell: (props) => (
            <div
                className="d-flex"
                style={{ fontSize: "20px", cursor: "pointer" }}
            >
                {console.log(props)}
                <button
                    className="btn"
                    onClick={() => {
                        handleDelete(props?.row?.original?._id);
                    }}
                >
                    <i
                        className="fa fa-trash"
                        style={{ marginRight: "10px", color: "red" }}
                    ></i>
                </button>
            </div>
        ),
    },
];

const Appointments = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);
    const [supportData, setSupportData] = useState([]);
    console.log("from state : ", supportData);
    const sizePerPageList = [
        {
            text: "5",
            value: 5,
        },
        {
            text: "25",
            value: 25,
        },
        {
            text: "50",
            value: 50,
        },
        {
            text: "All",
            value: supportData.length,
        },
    ];

    useEffect(() => {
        fetch("http://localhost:5000/appointment/")
            .then((res) => res.json())
            .then((data) => {
                setSupportData(data.result);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Table
                                columns={columns}
                                data={supportData}
                                pageSize={5}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Appointments;
