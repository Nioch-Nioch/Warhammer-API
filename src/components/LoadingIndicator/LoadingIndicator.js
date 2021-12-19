import React from 'react';
import styled, { keyframes } from 'styled-components';

const circle = keyframes`
    0% { transform: rotate(0deg) }
    50% { transform: rotate(180deg) }
    100% { transform: rotate(360deg) }
`;

const Root = styled.div`
    width: 210px;
    height: 210px;
    display: inline-block;
    overflow: hidden;
    background: none;
`;

const Box = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
`;
const Content = styled.div`
    position: absolute;
    animation: ${circle} 0.5s linear infinite;
    width: 130.20000000000002px;
    height: 130.20000000000002px;
    top: 39.9px;
    left: 39.9px;
    border-radius: 50%;
    box-shadow: 0 6.720000000000001px 0 0 #c91a1a;
    transform-origin: 65.10000000000001px 68.46000000000001px;
    box-sizing: content-box;
`;

function LoadingIndicator() {
    return (
        <Root>
            <Box>
                <Content />
            </ Box>
            
        </Root>
    )
}

export default LoadingIndicator;
