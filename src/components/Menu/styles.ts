import { ITheme } from '@/styles/styled'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props: ITheme) => props.theme.text};
  gap: 2px;
  cursor: pointer;
`
