import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [childData, setChildData] = useState([]);
    const [load, setLoad] = useState(false);
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/getDetails')
            .then(res => {
                setChildData(res.data.data);
                setLoad(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, [load]);

    const incrementRating = (id) => {
        axios.patch(process.env.REACT_APP_API_URL + '/increment/' + id)
            .then(() => {
                setLoad(true);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const decrementRating = (id) => {
        axios.patch(process.env.REACT_APP_API_URL + '/decrement/' + id)
            .then(() => {
                setLoad(true);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="container">
            <div className="jumbotron jumbotron-fluid"
                style={{ textAlign: "center", paddingBottom: "5%", paddingTop: "5%" }}>
                <div className="container">
                    <h1 className="display-4"
                        style={{ fontWeight: "bold" }}>
                        <u>Points Table</u>
                    </h1>
                </div>
            </div>
            <div className="row"
                style={{ textAlign: "center", borderBottom: "1px solid black" }}>
                <div className="col">
                    <h4 style={{ fontWeight: "bold" }}>Name</h4>
                    <Link to="/addName"  style={{ fontSize:"14px", textDecoration: "none" }}>
                        (Click to add new name)
                    </Link>
                </div>
                <div className="col">
                    <h4 style={{ fontWeight: "bold" }}>Points</h4>
                </div>
            </div>
            {childData.map((data, index) => {
                return (
                    <div className="row" key={index} style={{ paddingTop: "2%", textAlign: "center" }}>
                        <div className="shadow-bg p-2 rounded"
                            style={{ backgroundColor: "#FFE3FC" }}>
                            <div className="row">
                                <div className="col"
                                    style={{ borderRight: "2px solid black" }}>
                                    <p style={{ paddingTop: "10px", fontSize: "18px", fontWeight: "500" }}>
                                        {data.name}
                                    </p>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            <i
                                                onClick={() => decrementRating(data._id)}
                                                className="btn material-icons"
                                                style={{ cursor: "pointer", fontSize: "25px" }}>
                                                remove_circle
                                            </i>
                                        </div>
                                        <div className="col">
                                            <p style={{ paddingTop: "10px", fontSize: "18px", fontWeight: "500" }}>{data.rating}</p>
                                        </div>
                                        <div className="col">
                                            <i
                                                onClick={() => incrementRating(data._id)}
                                                className="btn material-icons"
                                                style={{ cursor: "pointer", fontSize: "25px" }}>
                                                add_circle
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;