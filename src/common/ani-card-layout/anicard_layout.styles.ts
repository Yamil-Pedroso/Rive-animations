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
    cursor: pointer;
`;

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 2rem;
    background-color: #c4c4c4;
    h3 {
        font-size: 1rem;
    }
`;
