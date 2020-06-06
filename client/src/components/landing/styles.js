import styled from 'styled-components'

export const LandingHeader = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  width: 350px;
  margin: auto;
  padding: 30px;
  text-align: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  color: #333;
  font-family: 'Raleway', sans-serif;
  h1 {
    padding-block-end: 15px;
  }
`

export const LandingMain = styled.main`
  max-width: 1170px;
  margin: auto;
  display: grid;
  row-gap: 20px;
  padding-block-start: 420px;
  text-align: center;
  h2 {
    font-family: 'Raleway', sans-serif;
  }
  article {
    padding-block-start: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 50px;
    color: #fff;
    text-align: left;
    section {
      background-color: #e85a4f;
      padding: 35px;
      border-radius: 5px;
    }
    h3 {
      font-family: 'Raleway', sans-serif;
      padding-block-end: 20px;
      font-size: 22px;
    }
    p {
      color: #fff;
      font-size: 14px;
    }
  }
`
