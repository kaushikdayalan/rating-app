import React from 'react';
import { useForm } from '../Hooks/useForm';
import axios from 'axios';
import { Link } from 'react-router-dom';
const AddName = () => {

    const [values, HandleChange] = useForm({ childName: "" });
    const addChildName = (e) => {
        e.preventDefault();
        console.log(values);
        axios.post(process.env.REACT_APP_API_URL + '/addName', values)
            .then(res => {
                console.log(res);
            })
            .catch(
                err => {
                    console.log(err);
                }
            )
    }

    return (
        <div >
            <div className="container" >
                <div className="jumbotron jumbotron-fluid" style={{ textAlign: "center" }}>
                    <div className="container" style={{ paddingTop: "5%", paddingBottom: "5%" }}>
                        <h1 className="display-4" style={{ fontWeight: "bold" }}><u>Add Child Name</u></h1>
                    </div>
                </div>
                <form>
                    <div className="form-group">
                        <label style={{fontSize:"20px"}}>Child name:</label>
                        <br />
                        <input type="text" name="childName" className="form-control" placeholder="Enter Name"
                            value={values.childName} onChange={HandleChange}
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary" onClick={e => { addChildName(e) }} style={{ width: "100%" }}>Submit</button>
                    <br /><br />
                    <Link className="btn btn-primary" to="/" style={{ width: "100%" }}>Back to points table</Link>
                </form>
            </div>
        </div>
    );
}

export default AddName;