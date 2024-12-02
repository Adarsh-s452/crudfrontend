import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Table.css'
import { deleteuser, getuser } from './services/allAPI';
import Edit from './Edit';

function Tables() {
  const [editResponse,setEditResponse]=useState('')
  const [data,setData]=useState([])



  const getuserdata= async()=>{
    const response= await getuser()
    
    setData(response.data)
  }
  const handleDelete=async(id)=>{
    const response=await deleteuser(id)
    console.log(response);
    getuserdata()
    
  }
  useEffect(()=>{
    getuserdata()
  },[editResponse])
  
  return (
    <div>
                 <div className="App m-5">
                 <Link to={'/forms'}><Button className='m-5' variant="warning">Add Employee</Button></Link>
     <table class="table table-hover table-dark ">
  <thead>
    <tr>
    <th scope="col">ID</th>
      <th scope="col">Empolyee Name</th>
      <th scope="col">Designation</th>
      <th scope="col">Salary</th>
      <th scope="col">Email address</th>
      <th scope='col'>Delete</th>
      <th scope='col'>Edit</th>
    </tr>
  </thead>
  <tbody>
    {
      data?.map((user)=>(

        <tr>
  <th scope="row">{user.id}</th>
  <td>{user.name}</td>
  <td>{user.designation}</td>
  <td>{user.salary}</td>
  <td>{user.email}</td>
  <td><button  onClick={()=>handleDelete(user.id)} class="btn btn-trash"><i class="fa-solid fa-trash"></i>Delete</button></td>
  <td><Edit data={user} setEditResponse={setEditResponse}/></td>
</tr>
      ))

    }
  </tbody>
</table>
    </div>
    </div>
  )
}

export default Tables