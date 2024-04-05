import axios from 'axios';
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';

function Showfile() {
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
        <div>
            <h1>ShowFile</h1>
            <input
                type="text"
                placeholder="Search files..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <div className="carddisp">
                {filteredFiles.map((file, index) => (
                    <div className='cardsubdiv' key={index}>
                        <Card style={{ width: '18rem', height: '30rem' }}>
                            <Card.Body>
                                <Card.Title><img src={file.image} height={220} width={180} alt="File Preview" /></Card.Title>
                                <Card.Text>
                                    <div className='assemble'><b>File Name:</b></div>{file.name}
                                </Card.Text>
                                <Card.Text>
                                    <div className='assemble'><b>File Category:</b></div>{file.category}
                                </Card.Text>
                                <Button variant="primary"><a href={`/filedetail/${file.id}`} className='showanc'>VIEW</a></Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Showfile;
