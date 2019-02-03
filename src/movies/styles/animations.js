import { keyframes, css } from "styled-components";

const explode = keyframes`
    0% {
        opacity: 1;
        transform: scale(1);
    }
 
    100% {
        opacity: 0;
        transform: scale(4);
    }
`;

export const explodeAnimation = css`
  animation: ${explode} 0.6s ease-out forwards;
  transform-origin: 50% 50%;
`;

const slideOut = keyframes`
   0% {
        opacity: 1;
        transform: translateX(0);
    }
 
    30% {
        opacity: 1;
        transform: translateX(50px);
    }
 
    80% {
        opacity: 1;
        transform: translateX(-800px);
    }
 
    100% {
        opacity: 0;
        transform: translateX(-800px);
    }
`;

export const slideOutAnimation = css`
  animation: ${slideOut} 0.8s cubic-bezier(0.65, -0.02, 0.72, 0.29);
`;
