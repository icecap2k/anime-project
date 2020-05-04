import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 80px;
  background-color: #d8c3a5;
  display: grid;
  grid-template-areas: '. header-content .';
  grid-template-columns: auto 1170px auto;
  nav {
    grid-area: header-content;
    display: grid;
    align-items: center;
    grid-template-columns: 25% 10% 10% auto;
    h1 {
      font-family: 'Righteous';
      color: #eae7dc;
      font-size: 48px;
      font-weight: 100;
    }
    a {
      color: #eae7dc;
      font-family: 'Raleway', sans-serif;
      font-size: 24px;
      font-weight: 500;
    }
    div {
      text-align: right;
      a {
        padding: 10px 20px;
        background-color: #fff;
        color: #e85a4f;
        border: 1px solid #e85a4f;
        border-radius: 4px;
      }
    }
  }
`
