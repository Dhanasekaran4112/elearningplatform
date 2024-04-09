import axios from 'axios';
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';

function Iot() {
    const [file, setFile] = useState({});

    const getFile = async () => {
        const response = await axios.get('http://localhost:8000/api/14');
        setFile(response.data);
    };

    useEffect(() => {
        getFile();
    }, []);

    return (
        <div>
            <h1>Import Course</h1>

            <div className="carddispimp">
                    <div className='cardsubdivimp'>
                        <Card style={{ width: '18rem', height: '30rem' }}>
                            <Card.Body>
                                <Card.Title><img src={file.image} height={220} width={180} alt="File Preview" /></Card.Title>
                                
                                <Card.Text>
                                    <div className='assemble'><b>File:</b></div><a href={file.file}>{file.name}</a>
                                </Card.Text>
                                
                                <Card.Text>
                                    <div className='assemble'><b>File Name:</b></div>{file.name}
                                </Card.Text>
                                <Card.Text>
                                    <div className='assemble'><b>File Category:</b></div>{file.category}
                                </Card.Text>

                                <Card.Text>
                                    <div className='assemble'><b>Author:</b></div>{file.author}
                                </Card.Text>
                                <Card.Text>
                                    <div className='assemble'><b>Description:</b></div>{file.description}
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
            </div>
        </div>
    );
};

export default Iot;