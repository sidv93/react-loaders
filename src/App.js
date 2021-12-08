import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Wave from './components/Wave';
import Cicle from './components/Cicle';
import Bounce from './components/Bounce';
import Modal from './components/Modal';
import Cred from './components/Cred';
import Pulse from './components/Pulse';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const Nav = styled.nav`
  flex: 1;
  background-color: #edeae4;
  padding: 0 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Link = styled.span`
  padding: 8px 20px;
  font-size: 1.4rem;
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${props => props.active ? 'grey' : 'transparent'};

  &:hover {
    background-color: grey;
  }
`;
const CanvasContainer = styled.div`
  flex: 8;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Canvas = styled.div`
    height: 500px;
    width: 60%;
    border: 1px solid grey;
`;

const links = [
    { label: 'bounce', active: true },
    { label: 'circle', active: false },
    { label: 'wave', active: false },
    { label: 'modal', active: false },
    { label: 'cred', active: false},
    { label: 'pulse', active: false },
]
function App() {
    const [current, setCurrent] = useState(links);
    const [active, setActive] = useState('bounce');
    const [showModal, toggleModal] = useState(false);
    const toggleActive = index => {
        const copy = [...current];
        const currentActive = copy.findIndex(item => item.active === true);
        copy[currentActive].active = false;
        copy[index].active = true;
        setActive(copy[index].label);
            setCurrent(copy);
        if (copy[index].label === 'modal') {
            toggleModal(true);
        }
    }
    return (
        <Container>
            <Modal showModal={showModal} toggleModal={toggleModal} />
            <Nav>
                {
                    current.map((item, index) =>
                        <Link key={index} active={item.active} onClick={() => toggleActive(index)}>{item.label}</Link>)
                }
            </Nav>
            <CanvasContainer>
                <Canvas>
                    {active === 'wave' && <Wave />}
                    {active === 'circle' && <Cicle />}
                    {active === 'bounce' && <Bounce />}
                    {active === 'cred' && <Cred />}
                    {active === 'pulse' && <Pulse />}
                </Canvas>
            </CanvasContainer>
        </Container>
    );
}

export default App;
