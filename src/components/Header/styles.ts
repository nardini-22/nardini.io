import { ITheme } from '@/styles/styled'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 12px;
  padding: 20px;
  border-radius: 16px;
  color: ${(props: ITheme) => props.theme.text};
  position: relative;
  background: ${(props: ITheme) => props.theme.header};
  box-shadow: 0 4px 30px ${(props: ITheme) => props.theme.headerShadow};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid #ffff;
  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
    padding-left: 24px;
  }
`

export const Title = styled.h1`
  position: absolute;
`
