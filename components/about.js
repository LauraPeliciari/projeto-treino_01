import React, { Component } from 'react';
import Gallery from './gallery1';

const images = [
  {
    original: 'https://picsum.photos/id/1004/500'
  },
  {
    original: 'https://picsum.photos/id/237/500'
  },
  {
    original: 'https://picsum.photos/id/1018/500'
  },
  {
    original: 'https://picsum.photos/id/1019/500'
  },
  {
    original: 'https://picsum.photos/id/1015/500'
  },
  {
    original: 'https://picsum.photos/id/1016/500'
  },
  {
    original: 'https://picsum.photos/id/1013/500'
  },
  {
    original: 'https://picsum.photos/id/1011/500'
  },
  {
    original: 'https://picsum.photos/id/1042/500'
  },
  {
    original: 'https://picsum.photos/id/10/500'
  },
];

const images2 = [
  {
    original: 'https://picsum.photos/id/1057/500'
  },
  {
    original: 'https://picsum.photos/id/1060/500'
  },
  {
    original: 'https://picsum.photos/id/1061/500'
  },
  {
    original: 'https://picsum.photos/id/1070/500'
  },
  {
    original: 'https://picsum.photos/id/1026/500'
  },
  {
    original: 'https://picsum.photos/id/1032/500'
  },
  {
    original: 'https://picsum.photos/id/1035/500'
  },
  {
    original: 'https://picsum.photos/id/1039/500'
  },
  {
    original: 'https://picsum.photos/id/1043/500'
  },
  {
    original: 'https://picsum.photos/id/1044/500'
  },
];

class About extends Component {
  render() {
    return (
      <section>
        <div className="about">
          <div className="main-grid main-gallery">
            <Gallery images={images} />
            <Gallery images={images2} />
          </div>
          <div className={this.props.className}>
            
          </div>
        </div>
      </section>
    )
  }
}

export default About;
