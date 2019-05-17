import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.scss';

const Home = () => (
  <div className="home">
    HOME sweet HOME
    <Link to="/about">Ir a ABOUT</Link>
  </div>
);

export default Home;
