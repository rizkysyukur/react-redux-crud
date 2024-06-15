import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from '../store/UserReducer';
import { useDispatch } from 'react-redux';


export const Home = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    console.log(users)

    const handleDeleteClick = (id) => {
        dispatch(deleteUser(id))
    }
    return (
        <div className='container'>
            <h2>Maintain with Redux</h2>
            <Link to="/Add" className='btn btn-success my-3'>Add</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map(({ id, nama, email, phone }, i) => (
                        <tr key={i}>
                            <td>{id}</td>
                            <td>{nama}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                            <td>
                                <Link to={`/edit/${id}`} className='btn btn-sm btn-warning'>Edit</Link>
                                <button onClick={() => handleDeleteClick({ id })} className='btn btn-sm btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
