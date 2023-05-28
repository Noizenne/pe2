import styled from "styled-components";

export const StyledBack = styled.button`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100px;
    background-color: #ffffff;
    border: none;
    font-size: 16px;
    cursor: pointer;
    padding-top: 1rem;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`