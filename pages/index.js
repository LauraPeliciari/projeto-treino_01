import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Header from '../components/header';
import Banner from '../components/banner';
import About from '../components/about';
import '../styles/nav.scss';
import '../styles/header.scss';
import '../styles/banner.scss';
import '../styles/about.scss';


const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <Header />

    <Banner />

    <About />

  </div>
)

export default Home
