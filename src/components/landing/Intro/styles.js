import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
  @media (max-width: 960px) {
    background: none;
  }
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    transform: translateY(-20px);
    text-align: center;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 4rem;
  }
  p {
    font-family: 'SF Mono', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #ff0a78;
    padding-left: 5px;
    letter-spacing: 1.75px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 55pt;
    letter-spacing: 1.75px;
    font-family: 'SF Mono', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

    @media (max-width: 960px) {
      font-size: 50pt;
      margin-top: 2rem;
      text-shadow:
        -0.5px -0.5px 0 #0a1928,
        0.5px -0.5px 0 #0a1928,
        -0.5px 0.5px 0 #0a1928,
        0.5px 0.5px 0 #0a1928;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 30pt;
    font-weight: normal;
    color: #8892b0;
    letter-spacing: 1.75px;

    @media (max-width: 680px) {
      font-size: 28pt;
    }
  }

  span {
    color: #ccd6f6;
    @media (max-width: 960px) {
      text-shadow:
		-0.1px -0.1px 0 #0a1928,
		0.1px -0.1px 0 #0a1928,
		-0.1px 0.1px 0 #0a1928,
		0.1px 0.1px 0 #0a1928;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
