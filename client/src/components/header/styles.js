import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 80px;
  background-color: #fff;
  display: grid;
  grid-template-areas: '. header-content .';
  grid-template-columns: auto 1170px auto;
  nav {
    grid-area: header-content;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-block-start: 10px;
    h1 {
      font-family: 'Righteous';
      color: #333;
      font-size: 48px;
      font-weight: 100;
    }
    a {
      color: #333;
      font-family: 'Raleway', sans-serif;
      font-size: 24px;
      font-weight: 500;
    }
    div {
      text-align: right;

      button {
        padding: 10px 20px;
        margin-inline-start: 20px;
        background-color: #fff;
        color: #e85a4f;
        border: 1px solid #e85a4f;
        border-radius: 4px;
        font-family: 'Raleway', sans-serif;
        font-size: 24px;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
`

export const ModalContainer = styled.div`
  position: absolute;
  background-color: #fff;
  padding: 30px 40px;
  display: grid;
  row-gap: 20px;
  grid-template-rows: auto 50px 50px 50px auto;
  z-index: 3;
  border-radius: 8px;
  left: 0;
  right: 0;
  top: 300;
  margin: auto;
  width: 350px;
  animation-name: modal-animation;
  animation-duration: 0.5s;

  @keyframes modal-animation {
    from {
      top: 200px;
      opacity: 0;
    }
    to {
      top: 300px;
      opacity: 1;
    }
  }

  > * {
    color: #e85a4f;
    font-family: 'Raleway', sans-serif;
  }

  h2 {
    font-size: 24px;
    padding-block-end: 10px;
    border-bottom: 1px solid #e85a4f;
  }

  input {
    font-size: 18px;
    padding: 0 20px;
  }
  input:focus,
  input:active,
  button:focus,
  button:active {
    outline-color: #e85a4f;
  }
  button {
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid #e85a4f;
    border-radius: 4px;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
  }
  svg {
    align-self: center;
    margin: auto;
    font-size: 40px;
  }
`
export const LayerOpacity = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`

export const HeaderGoBack = styled.div`
  max-width: 1170px;
  margin: auto;
  position: relative;

  button {
    padding: 5px 10px;
    border: none;
    border-bottom: 2px solid #333;
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
    font-family: 'Raleway', sans-serif;
    z-index: 10;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;

    svg {
      margin-inline-end: 5px;
    }
  }
`
