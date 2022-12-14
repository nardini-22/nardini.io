import styled from 'styled-components'

export const Container = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  height: 200px;
  @media screen and (min-width: 1024px) {
    width: 500px;
    height: 300px;
  }
`
