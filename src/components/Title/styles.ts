import { ITheme } from '@/styles/styled'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (min-width: 1024px) {
    justify-content: center;
  }
`

export const TitleContainer = styled.div`
  font-size: 24px;
  color: ${(props: ITheme) => props.theme.text};
  #name {
    text-shadow: ${(props: ITheme) => props.theme.neon};
    font-weight: bold;
  }
  #subtitle {
    font-size: 16px;
    color: #828282;
  }
`
