import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 15rem;
  border-bottom: 5px solid #0b0b0b;

  h2 {
    font-size: 1rem;
    color: #0b0b0b;
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: #212121;
    color: #fff;
    border-radius: 10rem;

    &:hover {
      .ship {
        animation: shipFloating 3s infinite;
      }

      @keyframes shipFloating {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1rem);
    }
    100% {
      transform: translateY(0);
    }
  }
    }


  }
`;

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  .ship {
    animation: shipFloating 3s infinite;
  }

  @keyframes shipFloating {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1rem);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
