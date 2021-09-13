import React, { Component } from 'react';
import UserInterface from '../components/pages/UserInterface';
import Header from '../components/pages/Header';


export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <UserInterface />
      </>
    );
  }
}
