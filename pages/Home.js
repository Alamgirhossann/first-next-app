import React from 'react';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <div >
        <Nav/>
        <p className={styles.container}> this is my home page</p>
           
        </div>
    );
};

export default Home;