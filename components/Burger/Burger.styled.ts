import styled from 'styled-components';
import { colors } from '../../global';

export const StyledBurger = styled.button<{ open: boolean }>`
  top: 1.2%;
  width: 1rem;
  height: 1.1rem;
  position: fixed;
  background: transparent;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  @media (min-width: 950px) {
    display: none
  }



  @media (max-width: 450px) and (min-width: 300px) {
    top: 1.2%;
  }

  div {
    width: 1.3rem;
    height: 1px;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color: grey;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(39deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(10px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-39deg)' : 'rotate(0)')};
    }
  }
`;
