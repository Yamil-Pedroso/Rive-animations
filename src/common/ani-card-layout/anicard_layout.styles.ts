import styled from 'styled-components';

interface AniCardLayoutContainerProps {
    bgColor?: string;
}

export const AniCardLayoutContainer = styled.div<AniCardLayoutContainerProps>`
    //background-color: ${({ bgColor }) => bgColor || "#000"}; 
    width: 18rem;
    height: 21rem;
    border: 5px solid #000;
    box-shadow: 3px 3px 0rem 0px  #000;
    overflow: hidden;

    h3 {
        width: 100%;
        padding: 1rem;
        background-color: #c4c4c4;
        font-size: 1rem;
    }
`;