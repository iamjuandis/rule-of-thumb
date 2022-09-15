import styled from "styled-components";

const HeaderContainer = styled.header`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.698864) 0%,
    rgba(0, 0, 0, 0.0001) 100%
  );
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  h1 {
    color: #ffffff;
    font-weight: 400;
    font-size: 36px;
    line-height: 43.2px;
  }
  .inner_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    max-width: 1100px;
    width: 100%;

    nav {
      align-items: center;
      vertical-align: middle;
      display: flex;
      flex-direction: row;
      justify-content: end;
      gap: 18px;
      a {
        color: #ffffff;
        font-size: 18px;
        font-weight: 300;
        text-decoration: none;
      }
      button {
        border: none;
        background: transparent;
        padding: 0;
        margin: 0;
        margin-left: 18px;
        img {
          height: 36px;
          width: 36px;
        }
      }
    }
  }
`;

export { HeaderContainer };
