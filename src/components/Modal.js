import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
};
const modal = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: '200px',
        opacity: 1,
        transition: {delay: 0.2}
    }
}

const Container = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;
const ModalElement = styled(motion.div)`
    max-width: 400px;
    margin: 0 auto;
    padding: 40px 20px;
    background: white;
    border-radius: 20px;
    text-align: center;
`;
const Button = styled.button`
    color: #444;
    font-weight: bold;
    border-color: #444;
    margin-top: 20px;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px 35px;
`;
const Text = styled.p`
    color: #444;
    font-weight: bold;
`;

const Modal = ({ showModal, toggleModal }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {
                showModal && (
                    <Container variants={backdrop} animate="visible" initial="hidden" exit="hidden">
                        <ModalElement variants={modal}>
                            <Text>Want to do it again?</Text>
                            <Button onClick={() => toggleModal(false)}>Close</Button>
                        </ModalElement>
                    </Container>
                )
            }
        </AnimatePresence>
    );
};

export default Modal;