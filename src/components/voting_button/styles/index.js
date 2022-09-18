import styled from "styled-components";

const VotingButtonContainer = styled.button`
  align-items: center;
  background: ${(props) => (props.type === "up" ? "green" : "orange")};
  border: none;
  cursor: pointer;
  display: flex;
  height: 45px;
  margin: 0;
  min-width: 45px;
  justify-content: center;
  width: 45px;
  &:focus,
  &:active {
    border: 2px solid #fff;
  }

  img {
    height: 24px;
    transform: rotate(${(props) => (props.type === "up" ? "0deg" : "180deg")});
    margin: auto;
    width: 24px;
  }
`;

export { VotingButtonContainer };
