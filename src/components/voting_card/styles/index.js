import styled from "styled-components";

const VotingCardComponent = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  .inner_container {
    display: flex;
    flex-direction: column;
    .card_content {
      display: flex;
      flex-direction: row;
      .texts_container {
        h4,
        p {
          color: #ffffff;
        }
      }
      .voting_actions {
        .buttons {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }
      }
    }
  }
`;

export { VotingCardComponent };
