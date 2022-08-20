import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
const EditUsers = () => {
  let navigate = useNavigate();
  const { id } = useParams();

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
    await axios.put(`http://localhost:3005/users/${id}`, user)
    navigate('/')
  }
  useEffect(() => {
    loadUser()
  }, [])
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3005/users/${id}`)
    setUser(result.data)
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


        <button type="submit" class="btn btn-warning btn-block">Update</button>
      </form>
    </div>
  )
}



export default EditUsers