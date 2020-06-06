import styled from 'styled-components'

export const SerieListContainer = styled.div`
  padding: 20px 0;
  max-width: 1170px;
  margin: auto;
  display: grid;
  row-gap: 20px;
  h3 {
    color: #e85a4f;
    border-bottom: 2px solid #e85a4f;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
  }
  a {
    text-align: right;
  }
`

export const SerieRow = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`

export const ItemCard = styled.section`
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  row-gap: 10px;
  img {
    cursor: pointer;
    border: 1px transparent;
    max-width: 100%;
  }
  img:hover {
    opacity: 0.7;
    transition: all 150ms ease-in-out;
  }
`

export const Button = styled.button`
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-radius: 4px;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    transition: all 150ms ease-in-out;
  }
`

export const ButtonAdd = styled(Button)`
  background-color: #4dd091;
  color: #fff;
  border: 1px solid #4dd091;
  &:hover {
    background-color: #fff;
    color: #4dd091;
  }
`

export const ButtonRemove = styled(Button)`
  background-color: #e85a4f;
  color: #fff;
  border: 1px solid #e85a4f;
  &:hover {
    background-color: #fff;
    color: #e85a4f;
  }
`

export const ButtonInfo = styled(Button)`
  background-color: #0065a2;
  color: #fff;
  border: 1px solid #0065a2;
  &:hover {
    background-color: #fff;
    color: #0065a2;
  }
`
export const SerieInfoContainer = styled.article`
  section {
    position: relative;
    z-index: 2;
    top: 360px;
    max-width: 1170px;
    margin: auto;
    display: grid;
    grid-template-columns: 2fr auto;
    column-gap: 30px;
    h2 {
      padding-block-start: 60px;
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      font-size: 30px;
    }
  }
`

export const SerieLateralInfo = styled.div`
  display: grid;
  grid-template-rows: auto 50px;
  row-gap: 20px;
  align-content: baseline;
  img {
    border: 5px solid #fafafa;
    outline: 2px solid #e85a4f;
  }
  button {
    align-self: center;
  }
`

export const SerieBanner = styled.div`
  height: 400px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.image});
  position: absolute;
  z-index: 1;
  border-bottom: 1px solid #e85a4f;
`
export const SerieVideo = styled.div`
  display: grid;
  justify-items: center;
  margin: 50px 0;
  border-block-start: 1px solid #000;
  border-block-end: 1px solid #000;
`
