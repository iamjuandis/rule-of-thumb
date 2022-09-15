import styled from "styled-components";

const VotingButtonContainer = styled.button`
  background: ${(props) => (props.type === "up" ? "green" : "orange")};
  border: none;
  margin: 0;
  padding: 23px;
  width: auto;
  img {
    height: 36px;
    transform: rotate(${(props) => (props.type === "up" ? "0deg" : "180deg")});
    margin: auto;
    width: 36px;
  }
`;

export { VotingButtonContainer };
