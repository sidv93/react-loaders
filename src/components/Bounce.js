import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const transition = { duration: 0.4, yoyo: Infinity, ease: [0.6, 0.01, -0.05, 0.9] };

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Ball = styled(motion.div)`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    background-color: black;
`;

const ballTransition = {
    y: transition,
    backgroundColor: transition
}

const Bounce = () => {
    return (
        <Container>
            <Ball transition={ballTransition} animate={{ y: ['70px', '-70px'], backgroundColor: ['#ff6699', '#6666ff'] }} />
        </Container>
    );
};

export default Bounce;