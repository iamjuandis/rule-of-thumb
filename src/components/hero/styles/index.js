import styled from "styled-components";

const HeroSection = styled.section`
  background-image: url(${(props) => props.backgroundImageHero});
  background-color: #cccccc;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  width: 100%;
  .top_container {
    margin: auto;
    max-width: 1100px;
    padding-bottom: 30px;
    padding-top: 141px;
    width: auto;
  }
`;

const HeroContent = styled.div`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(25px);
  max-width: 550px;
  padding: 36px 27px;
  width: 100%;
`;

export { HeroSection, HeroContent };
