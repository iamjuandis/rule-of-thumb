import styled from "styled-components";

const GaugeBarComponent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const GaugeSingleBar = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.type === "up" ? "row" : "row-reverse")};
  min-width: 120px;
  width: ${(props) => props.percentage};
  img {
    height: 22.5px;
    transform: rotate(${(props) => (props.type === "up" ? "0deg" : "180deg")});
    width: 22.5px;
  }
  span {
    color: #ffffff;
    font-size: 27px;
    font-weight: 400;
  }
`;

export { GaugeBarComponent, GaugeSingleBar };
