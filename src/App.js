import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
}
