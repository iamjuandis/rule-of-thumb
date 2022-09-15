import styled from "styled-components";

const VotingButtonContainer = styled.button`
  background: ${(props) => (props.type === "up" ? "green" : "orange")};
  margi: auto;
  img {
    height: 36px;
    transform: rotate(${(props) => (props.type === "up" ? "0deg" : "180deg")});
    width: 36px;
  }
`;

export { VotingButtonContainer };
