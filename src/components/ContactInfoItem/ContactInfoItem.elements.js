import styled from "styled-components";

export const ItemStyles = styled.div`
    padding: 2em;
    background-color: var(--dark-bg);
    display: flex;
    align-items: center;
    gap: 7em;
    border-radius: 8px;
    margin-bottom: 2em;

    .icon{
        color: var(--white-color);
        background-color: #555;
        padding: 1.3em;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    svg{
        font-size: 3.5em;
    }
`;