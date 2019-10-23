import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Header from '../components/header';
import Banner from '../components/banner';
import About from '../components/about';
import Footer from '../components/footer';
import '../styles/main.scss';
import '../styles/nav.scss';
import '../styles/header.scss';
import '../styles/banner.scss';
import '../styles/about.scss';
import '../styles/footer.scss';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { className: 'hidden' };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 80) {
      this.setState({
        className: 'show'
      })
      //console.log(document.documentElement.scrollTop);
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }
  

  render() {
    return (
      <Fragment>
        <Head>
          <title>Home</title>
        </Head>
        <Nav />
        <Header />
        <Banner />
        <About className={this.state.className}/>
        <Footer />
      </Fragment>
    )
  }
}


export default Home
