import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import  axios  from 'axios';
import {useNavigate} from 'react-router-dom';

function Addfile(){

    const[image,setImage]=useState(null)
    const[file,setfile]=useState(null)
    const[name,setName]=useState("")
    const[author,setauthor]=useState("")
    const[description,setDescription]=useState("")
    const[category,setCategory]=useState("")


    const navigate=useNavigate()



    const Add=async()=>{

        if (image !==null && file!==null && name!==null && author!==null && description!==null && category!==null){
            let formValues=new FormData()


            if (image !==null && file!==null){
            formValues.append('image',image)
            formValues.append('file',file)
            }
                
            formValues.append('name',name)
            formValues.append('author',author)
            formValues.append('description',description)
            formValues.append('category',category)

            await axios({
                method:'POST',
                url:'http://localhost:8000/api/',
                data:formValues,
            }).then((response)=>{
                console.log(response.data);
                navigate('/');
            });
        }
        else{
            window.alert("You must fill all the fields")
        }
        
    }

    return(
        <div>
            <h1>Add Files</h1>

            
            <div className="addform">
            <InputGroup className="mb-3 ">

                <InputGroup.Text id="inputGroup-sizing-default" className="formdesc">Image</InputGroup.Text>
                <Form.Control 
                    aria-label="Default" 
                    aria-describedby="inputGroup-sizing-default" 
                    type="file"
                    name="image" 
                    src={image}
                    onChange={(e)=>setImage(e.target.files[0])}
                />
                </InputGroup>


                <InputGroup className="mb-3 ">

                <InputGroup.Text id="inputGroup-sizing-default" className="formdesc">File</InputGroup.Text>
                <Form.Control 
                    aria-label="Default" 
                    aria-describedby="inputGroup-sizing-default" 
                    type="file"
                    name="file" 
                    src={file}
                    onChange={(e)=>setfile(e.target.files[0])}
                />
                </InputGroup>

            <InputGroup className="mb-3">    
                <InputGroup.Text id="inputGroup-sizing-default" className="formdesc">Name</InputGroup.Text>
                <Form.Control 
                    aria-label="Default" 
                    aria-describedby="inputGroup-sizing-default" 
                    name="name" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
            </InputGroup>



            <InputGroup className="mb-3">    
                <InputGroup.Text id="inputGroup-sizing-default" className="formdesc">Author</InputGroup.Text>
                <Form.Control 
                    aria-label="Default" 
                    aria-describedby="inputGroup-sizing-default" 
                    name="author" 
                    value={author}
                    onChange={(e)=>setauthor(e.target.value)}
                />
            </InputGroup>


            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default" className="formdesc">Description</InputGroup.Text>
                    <Form.Control 
                        aria-label="Default" 
                        aria-describedby="inputGroup-sizing-default" 
                        name="description" 
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default" className="formdesc">Category</InputGroup.Text>
                    <Form.Control 
                        aria-label="Default" 
                        aria-describedby="inputGroup-sizing-default" 
                        name="category" 
                        value={category}
                        onChange={(e)=>setCategory(e.target.value)}
                    />
            </InputGroup>

            <button className="btn btn-primary" onClick={Add}>Add</button>
            </div>
        </div>
    )
}


export default Addfile;