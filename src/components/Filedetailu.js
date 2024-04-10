import axios  from 'axios'
import React, { useEffect, useState } from "react"
import { useParams , useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../App.css';

function Filedetailu(){
            const [file, setfile]=useState([]);
            const {id}=useParams();
            const nav=useNavigate();

            const getsinglefile=async()=>{
            const {data}=await axios.get(`http://Localhost:8000/api/${id}`)
            setfile(data)
            }

    
        useEffect(()=>{
            getsinglefile();
        },[]);

        const DeleteData=async(id)=>{
            await axios.delete(`http://Localhost:8000/api/${id}`)
            nav('/')
        }
    return (
        <div className='filedetailheadup'>
            <h1>File Detail</h1>
            <hr></hr>
            <p><img src={file.image} height={220} width={180}></img></p>
            <center className='filedetails'>
            <table width={700}>
                <tr >
                    <th>File:</th>
                    <td className='tabtr'><a href={file.file}>{file.name}</a></td>
                </tr><br></br>

                <tr>
                    <th>Name:</th>
                    <td className='tabtr'>{file.name}</td>
                </tr><br></br>

                <tr>
                    <th>Author:</th>
                    <td className='tabtr'>{file.author}</td>
                </tr><br></br>

            </table>
            <Button variant="primary" className='showview'><a href={`/updatefile/${file.id}`} className='showanc'>UPDATE</a></Button>
            <Button variant="danger" onClick={()=>DeleteData(file.id)}>DELETE</Button>
            </center>

            
        </div>
    )
}

export default Filedetailu;