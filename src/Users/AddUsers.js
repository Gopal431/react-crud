import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const AddUsers = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })
    const { name, username, email, phone, website } = user
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: [e.target.value] })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3005/users', user)
        navigate('/')
    }
    return (
        <div className='container'>
            <form onSubmit={e => onSubmit(e)}>
                <div class="my-3 ">
                    <input type="text" value={name} name='name' onChange={e => onInputChange(e)} class="form-control" placeholder='Enter Your Name' />
                </div>
                <div class="mb-3">
                    <input type="text" value={username} name='username' onChange={e => onInputChange(e)} class="form-control" placeholder='enter Your Username' />
                </div>
                <div class="mb-3">
                    <input type="text" value={email} name='email' onChange={e => onInputChange(e)} class="form-control" placeholder='Enter Your E-mail Address' />
                </div>
                <div class="mb-3">
                    <input type="text" value={phone} name='phone' onChange={e => onInputChange(e)} class="form-control" placeholder='Enter Your Number' />
                </div>
                <div class="mb-3">
                    <input type="text" value={website} name='website' onChange={e => onInputChange(e)} class="form-control" placeholder='Enter Your Website' />

                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddUsers