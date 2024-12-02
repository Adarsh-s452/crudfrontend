import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { editUser } from './services/allAPI';

function Edit({data,setEditResponse}) {
    const[updateUser,setUpdateUser]=useState({
        id:data.id,
        name:data.name,
        designation:data.designation,
        salary:data.salary,
        email:data.email
    })
    console.log(updateUser);
    
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleupdate=async()=>{
        const {id,name,designation,salary,email}=updateUser
        if(!id||!name||!designation||!salary||!email){
            alert("fill the form completly")
        }else{
            const response=await editUser(id,updateUser)
            console.log(response);
            if(response.status===200){
                handleClose()
                setEditResponse(response)
            }else{
                console.log(response);
            }
        }
    }
  return (
    <div>
            <Button variant="primary" className='btn btn-trash' onClick={handleShow}>
            <i class="fa-solid fa-pen-to-square"></i>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>ID</Form.Label>
  <Form.Control value={updateUser.id} type="number" placeholder="name" />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Name</Form.Label>
  <Form.Control value={updateUser.name}  onChange={(e)=>setUpdateUser({...updateUser,name:e.target.value})} type="text" placeholder="name" />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Designation</Form.Label>
  <Form.Control value={updateUser.designation} onChange={(e)=>setUpdateUser({...updateUser,designation:e.target.value})} type="text" placeholder="designation" />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Salary</Form.Label>
  <Form.Control type="text" value={updateUser.salary} onChange={(e)=>setUpdateUser({...updateUser,salary:e.target.value})} placeholder="salary" />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Email address</Form.Label>
  <Form.Control value={updateUser.email} onChange={(e)=>setUpdateUser({...updateUser,email:e.target.value})} type="email" placeholder="email" />
</Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleupdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit
 