import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import Table from "./Table";

const columns = [
    {
        Header: "doc_name",
        accessor: "doc_name",
        sort: false,
    },
    {
        Header: "pat_name",
        accessor: "pat_name",
        sort: false,
    },
    {
        Header: "Action",
        Cell: (props) => (
            <div
                className="d-flex"
                style={{ fontSize: "20px", cursor: "pointer" }}
            >
                <Link
                    to={{
                        pathname: "/pages/viewsupport/" + props.row.original.id,
                        state: props.row.original,
                    }}
                >
                    <i
                        className="mdi mdi-eye"
                        style={{ marginRight: "10px", color: "gray" }}
                    ></i>
                </Link>
                <Link
                    to={{
                        pathname: "/pages/editsupport/" + props.row.original.id,
                        state: props.row.original,
                    }}
                >
                    <i
                        className="mdi mdi-square-edit-outline"
                        style={{ marginRight: "10px", color: "gray" }}
                    ></i>
                </Link>
                {/* <i className="mdi mdi-delete" onClick={() => deletePayouts(props)}></i> */}
            </div>
        ),
    },
];

const ManagePatient = () => {
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

export default ManagePatient;
