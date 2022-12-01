import { ITheme } from '@/styles/styled'
import styled, { keyframes } from 'styled-components'

interface IDot {
  option: string
}

export const Wrapper = styled.div`
  width: 32px;
  height: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 3px;
  cursor: pointer;
  background: ${(props: ITheme) => props.theme.header};
  box-shadow: 0 4px 30px ${(props: ITheme) => props.theme.headerShadow};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid #ffff;
`

export const Dot = styled.div<IDot>`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 100px;
  animation: 0.5s
    ${props => (props.option == 'dark' ? LeftToRight : RightToLeft)} ease;
  animation-fill-mode: forwards;
  background: ${(props: ITheme) => props.theme.text};
`

const LeftToRight = keyframes`
  0% {
    transform: translateX(10px)
  }
  100% {
    transform: translateX(0%)
  }
`
const RightToLeft = keyframes`
  0% {
    transform: translateX(0%)
  }
  60%{
  }
  100% {
    transform: translateX(14px)
  }
`
