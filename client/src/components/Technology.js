import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Technologies = () =>(
    <div className='Technologies'>
        <Navbar />
        <br />
        <br />
        <br />
        <div className='container'>
            <h3 className='display-4'>Technology We Used</h3>
            <ul>
                <li>Cyclic App </li>
                <li>Mongodb </li>
                <li>Express js</li>
                <li>React js</li>
                <li>Node js</li>
            </ul>
        </div>
        <Footer />
    </div>
)

export default Technologies;