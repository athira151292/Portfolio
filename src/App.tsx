import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import { Container, AppContainer } from './App.styles';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Container>
        <Profile />
        <AboutMe />
        <Skills />
        <ContactMe />
      </Container>
    </AppContainer>
  );
}

export default App;
