import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const transition = {
    duration: 0.8,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: "loop"
};

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Dots = styled(motion.div)`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;
const Dot = styled(motion.div)`
    background-color: #ff6699;
    height: 20px;
    width: 20px;
    border-radius: 10px;
`;

function Cred() {
    return (
        <Container>
            <Dots>
                <Dot
                    initial={{
                        x: 0,
                        scale: 1,
                        perspective: 400
                    }}
                    animate={{
                        x: 70,
                        scale: [1, 3, 1],
                        perspective: [400, 1600, 400],
                    }}
                    transition={transition}
                />
                <Dot
                    initial={{
                        x: 0
                    }}
                    animate={{
                        x: -35
                    }}
                    transition={transition}
                />
                <Dot
                    initial={{
                        x: 0
                    }}
                    animate={{
                        x: -35,
                    }}
                    transition={transition}
                />
            </Dots>
        </Container>
    )
}

export default Cred;
