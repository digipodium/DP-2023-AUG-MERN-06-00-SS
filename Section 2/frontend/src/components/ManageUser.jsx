import React, { useEffect, useState } from 'react'

const ManageUser = () => {

    const [userList, setUserList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setUserList(data);
    };

    useEffect(() => {
        fetchUserData();
    }, [])


    return (
        <div>

            <div className='container'>

                <h2 className='text-center'>Manage User</h2>
                <hr />

                <table className='table table-dark'>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Password</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map((user) => (
                                <tr>
                                    <td>{user._id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.name}</td>
                                    <td>{user.password}</td>
                                    <td>
                                        <button className='btn btn-primary rounded-pill'>
                                            <i class="fa-regular fa-pen-to-square"></i>&nbsp;Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger rounded-pill'>
                                            <i class="fa-solid fa-trash"></i>&nbsp;Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default ManageUser