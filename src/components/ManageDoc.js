import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import Table from "./Table";

const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
        fetch(`http://localhost:5000/doctor/${id}`, {
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
        Header: "Doctor Name",
        accessor: "doc_name",
        sort: false,
    },
    {
        Header: "Doctor designation",
        accessor: "doc_designation",
        sort: false,
    },
    {
        Header: "Doctor email",
        accessor: "doc_email",
        sort: false,
    },
    {
        Header: "Doctor phone",
        accessor: "doc_phone",
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

const ManageDoc = () => {
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
        fetch("http://localhost:5000/doctor/")
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

export default ManageDoc;
