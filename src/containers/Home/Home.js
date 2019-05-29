import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.scss';

const Home = () => (
  <div className="home">
    HOME sweet HOME
    <br />
    <Link to="/register">Ir a REGISTER</Link>
  </div>
);

export default Home;
