import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    height: 300px;
  }
`
