
import React, { useEffect, useState } from 'react'
import { useNavigate , useParams ,Link} from "react-router-dom";
import axios from 'axios'
const User = () => {
    const [user , setUser]=useState({
        name :"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const {id} = useParams();
    useEffect(()=>{
        loadUser()
    },[])
    const loadUser = async ()=>{
        const res = await axios.get(
            `http://localhost:3005/users/${id}`
        );
        setUser(res.data)
    }
    let x = Math.random();
    const n =x*10;
  return (
    <div className='container'>
     
        <h1 className='display-4'>User Reg No :- {n}{id}</h1>
        <hr/>
        <ul className='list-group w-50'> 
        <li className='list-group-item'>Name: {user.name}</li>
        <li className='list-group-item'>user name :{user.username}</li>
        <li className='list-group-item'>Email: {user.email}</li>
        <li className='list-group-item'>Phone : {user.phone}</li>
        <li className='list-group-item'> Webiste : { user.website}</li>

        </ul>
        <Link className='btn btn-primary my-4 end' to='/'>
            Back to Home
        </Link>
    </div>
  )
}

export default User