import Image from 'next/image';
import React from 'react';
import Nav from '../components/Nav';

const About = () => {
    return (
        <div className='main-div'>
        <Nav/>
            <p>this is my about page</p>
            <Image src={'/Media.png'} width="500" height='500' alt='about'/>
            <Image src='https://images.pexels.com/photos/13716813/pexels-photo-13716813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width="500" height='500' alt='about'/>
            <style jsx>
               {` .main-div{
                    background:blue
                }`
            }
            </style>
        </div>
    );
};

export default About;