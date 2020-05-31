import styled from 'styled-components'

export const SearchInput = styled.input`
  width: 360px;
  padding: 10px 20px;
  font-family: 'Raleway', sans-serif;
  color: #e85a4f;
  font-weight: 700;
  font-size: 18px;
`

export const SearchDropList = styled.ul`
  width: 400px;
  position: absolute;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-top: 5px;
  z-index: 6;
`

export const SearchSectionHeader = styled.li`
  border-block-end: 1px solid #ccc;
  background-color: #e85a4f;
  padding: 5px;
  font-size: 18px;
  font-family: 'Raleway', sans-serif;
  color: #fff;
  font-weight: 700;
  text-align: center;
  align-self: center;
  text-transform: uppercase;
`

export const SearchItem = styled.li`
  display: grid;
  grid-template-columns: 10% auto;
  border-block-end: 1px solid #ccc;
  background-color: #fff;
  column-gap: 10px;
  padding: 5px;
  cursor: pointer;

  span {
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
    color: #e85a4f;
    font-weight: 700;
    text-align: left;
    align-self: center;
  }

  img {
    max-width: 100%;
  }
`
