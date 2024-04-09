import axios from 'axios';
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';

function Filedetailcourse() {
    const [file, setFile] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const getFile = async () => {
        const response = await axios.get('http://localhost:8000/api/');
        setFile(response.data);
    };

    useEffect(() => {
        getFile();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredFiles = file.filter((fileItem) =>
        fileItem.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='course'>
            
            <input className='search'
                type="text"
                placeholder="Search files..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <p className='addfile'>If your a teacher<a href='/addfiles'>Add file</a> </p>
            
            <div className="carddisp">
                {filteredFiles.map((file, index) => (
                    <div className='cardsubdiv' key={index}>
                        <Card style={{ width: '13rem', height: '100%' }}>
                            <Card.Body>
                                <Card.Title><img className='coursefileimg' src={file.image} height={220} width={180} alt="File Preview" /></Card.Title>
                                <div className='coursefilename'>
                                <Card.Text>
                                    <div className='assemble'><b>File Name:</b></div>{file.name}
                                </Card.Text>
                                <Card.Text>
                                    <div className='assemble'><b>File Author:</b></div>{file.author}
                                </Card.Text>
                                <Button variant="primary"><a href={`/Filedetailu/${file.id}`} className='showanc'>VIEW</a></Button>
                                </div>
                                
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filedetailcourse;