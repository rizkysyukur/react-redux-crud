import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/UserReducer";
import { useSelector } from "react-redux";
import { useNavigate, userNavigate } from "react-router-dom";


export const Add = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const users = useNavigate();

    const dispatch = useNavigate();

    const onHandleSubmit = (evt) => {
        evt.preventDefault();
    }

    let newId = (users.length > 0 ? users[users.length - 1].id + 1 : 1);

    dispatch(addUser({ "id": newId, name, email, phone }));
    navigator("/");

    return (
        <div className="d-flex w-100 vh-100 justtify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3>Add User</h3>
                <form onSubmit={onHandleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input onChange={(evt) => setName(evt.target.value)} type="text" name="name" className="form-control" placeholder="Enter name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input onChange={(evt) => setEmail(evt.target.value)} type="email" name="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div>
                        <label htmlFor="Phone">Phone: </label>
                        <input onChange={(evt) => setPhone(evt.target.value)} type="text" />
                    </div>
                    <br />
                    <button className="btn btn-info">Save</button>
                </form>
            </div>
        </div>
    )
}