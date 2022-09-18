import styled from "styled-components";

const VotingCardComponent = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: left;
  background-size: 267px;
  width: 100%;
  .inner_container {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.0001) 0%,
      #888888 19.79%,
      #666666 50%,
      rgba(51, 51, 51, 0.6) 71.88%
    );

    display: flex;
    flex-direction: column;
    .card_content {
      display: flex;
      flex-direction: row;
      .texts_container {
        h4,
        p {
          color: #ffffff;
          text-align: left;
        }
        h4 {
          font-size: 36px;
          font-weight: 400;
          line-height: 63px;
        }
        p {
          font-size: 18px;
          font-weight: 400;
          line-height: 21.6px;
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
