import { ITheme } from './styled'

export const lightTheme: ITheme = {
  theme: {
    body: '#f2f2f2',
    text: '#262626',
    primary: '#BD93F9',
    highlight: '#E4289D',
    header: 'rgba(255, 255, 255, 0.2)',
    headerShadow: 'rgba(0, 0, 0, 0.1)'
  }
}

export const darkTheme = {
  theme: {
    body: '#000000',
    text: '#ffffff',
    primary: '#BD93F9',
    highlight: '#E4289D',
    header: 'rgba(0, 0, 0, 0.1)',
    headerShadow: 'rgba(255, 255, 255, 0.1)'
  }
}
