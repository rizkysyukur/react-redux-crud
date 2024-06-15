import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../store/UserReducer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Edit = () => {

    const users = useSelector((state) => state.users);
    const { id } = useParams();

    const editUserData = users.filter((data) => data.id === id);

    const { nama, setNama } = useState(editUserData[0].nama);
    const { email, setEmail } = useState(userEditData[0].email);
    const { phone, setPhone } = useState(userEditData[0].phone);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const onHandleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(editUser({ id, nama, email, phone }));
        navigate("/");
    }

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3>Edit User</h3>
                <form onSubmit={onHandleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input onChange={(evt) => setNama(evt.target.value)} type="text" name="name" className="form-control" value={nama} placeholder="Enter name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input onChange={(evt) => setEmail(evt.targer.value)} type="email" name="email" className="form-control" value={email} placeholder="Enter email" />
                    </div>
                    <div>
                        <label htmlFor="phone">phone: </label>
                        <input onChange={(evt) => setPhone(evt.target.value)} type="text" name="phone" className="form-control" value={phone} placeholder="Enter phone" />
                    </div>
                    <br />
                    <button className="btn btn-info">Save</button>
                </form>
            </div>
        </div>
    )
}