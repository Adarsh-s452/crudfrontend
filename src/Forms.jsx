import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { adduser } from './services/allAPI'


function Forms() {
  const [user,setUser]=useState({
    id:'',
    name:'',
    designation:'',
    salary:'',
    email:''

  })
const handlesubmit=async()=>{
  const {id,name,designation,salary,email}=user
  if(!id||!name||!designation||!salary||!email){
    alert("plese fill the form completly")
  }else{
    const response=await adduser(user)
    console.log(response);
    alert("added succesfully")
    setUser({id:'',name:'',designation:'',salary:'',email:''})
    
  }
}  
  return (
    <div>
        <div className='m-5 border p-5 bg-black text-white'>
<Form>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   <Form.Label>ID</Form.Label>
   <Form.Control onChange={(e)=>setUser({...user,id:e.target.value})} value={user.id} type="number" placeholder="ID"/>
 </Form.Group>
 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   <Form.Label>Name</Form.Label>
   <Form.Control  onChange={(e)=>setUser({...user,name:e.target.value})} value={user.name} type="text" placeholder="name"/>
 </Form.Group>
 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   <Form.Label>Designation</Form.Label>
   <Form.Control  onChange={(e)=>setUser({...user,designation:e.target.value})} value={user.designation} type="text" placeholder="designation"/>
 </Form.Group>
 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   <Form.Label>Salary</Form.Label>
   <Form.Control  onChange={(e)=>setUser({...user,salary:e.target.value})} value={user.salary} type="text" placeholder="salary"/>
 </Form.Group>
 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   <Form.Label>Email address</Form.Label>
   <Form.Control  onChange={(e)=>setUser({...user,email:e.target.value})} value={user.email} type="email" placeholder="email"/>
 </Form.Group>
</Form>
<Button variant="danger" onClick={handlesubmit}>Submit</Button>
<Link to={'/'}><Button className='ms-2' variant="danger">Back to Table</Button></Link>
</div>
    </div>
  )
}

export default Forms
