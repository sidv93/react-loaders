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
    background-color: purple;
    border-radius: 50%;
`;
const Child = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: inherit;
    border-radius: 50%;
`;

const Cicle = () => {
    return (
        <Container>
            <Parent>
                {
                    [...Array(3)].map((e, index) => (
                        <Child
                            initial={{
                                scale: 1,
                                opacity: 1
                            }}
                            animate={{
                                scale: 2,
                                opacity: 0
                            }}
                            transition={{
                                delay: (index + 1) * 0.4,
                                loop: Infinity,
                                duration: 2,
                                ease: [0.6, 0.01, -0.05, 0.9]
                            }}
                        />
                    ))
                }
            </Parent>
        </Container>
    );
};

export default Cicle;