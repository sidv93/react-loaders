import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const transition = { loop: Infinity, duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] };

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Parent = styled.div`
    position: relative;
    height: 100px;
    width: 100px;
`;
const Child = styled(motion.div)`
    height: 100%;
    width: 100%;
    border: 1rem solid #e9e9e9;
    border-top: 1rem solid #3498db;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
`;

const Cicle = () => {
    return (
        <Container>
            <Parent>
                <Child animate={{rotate: 360}} transition={transition} />
            </Parent>
        </Container>
    );
};

export default Cicle;