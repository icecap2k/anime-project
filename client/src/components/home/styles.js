import styled from 'styled-components'

export const CategoryContainer = styled.section`
  padding: 20px;
  width: 250px;
  position: absolute;
  left: 20px;
  top: 20px;
  background-color: #fff;
  border: 2px solid #e85a4f;
  border-radius: 4px;
  h3 {
    font-family: 'Raleway', sans-serif;
    color: #e85a4f;
    margin: 0 0 10;
    padding-block-end: 8px;
    border-block-end: 2px solid #e85a4f;
  }
  ul {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 10px;
  }
  li {
    cursor: pointer;
    font-family: 'Raleway', sans-serif;
    color: #e85a4f;
  }
`
export const HomeContainer = styled.main`
  margin-block-start: 30px;
`
