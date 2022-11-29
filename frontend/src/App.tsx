import React from 'react';
import Main from './component/Main';
import NavBar from './component/NavBar';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Play from './component/Play';
import backgroundImg from './images/background.svg';
const BackgroundImage = styled.div`
  height: 400vh;
  background: url(${backgroundImg});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BackgroundImage>
          <NavBar />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/play" element={<Play />}></Route>
          </Routes>
        </BackgroundImage>
      </BrowserRouter>
    </div>
  );
}

export default App;
