import styled, { css } from 'styled-components';


export const ButtonContainer = styled.button`
    ${({ disabled }) => disabled ? 
        css`
            opacity: 0.6;
            cursor: no-drop;
        `
        : 
        css`
            cursor: pointer;
        `
    }
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
    }
`