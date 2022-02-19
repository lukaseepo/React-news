import React from 'react'
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
       <div className='main'>
            <h1>404 - PAGE NOT FOUND</h1><br/>
            <h4>Seems like the page you were looking for could not be found</h4> 
            <Link className='link' to='/'>Go Home</Link>
       </div>
    )
}

export default NotFound
