import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/UserReducer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Add = () => {

    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const users = useSelector((state) => state.users);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const onHandleSubmit = (evt) => {
        evt.preventDefault()

        let idNew = (users.length > 0 ? users[users.length - 1].id + 1 : 1);

        dispatch(addUser({ "id": idNew, nama, email, phone }))
        navigate("/")
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Add User</h3>
                <form onSubmit={onHandleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input onChange={(evt) => setNama(evt.target.value)} type="text" name='name' className='form-control' placeholder='Enter name' />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input onChange={(evt) => setEmail(evt.target.value)} type='email' name='email' className='form-control' placeholder='Enter email' />
                    </div>
                    <div>
                        <label htmlFor='fono'>Phone:</label>
                        <input onChange={(evt) => setPhone(evt.target.value)} type='text' name='phone' className='form-control' placeholder='Enter phone' />
                    </div>
                    <br />
                    <button className='btn btn-info'>Save</button>
                </form>
            </div>
        </div>
    )
}
