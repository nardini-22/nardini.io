import { ITheme } from './styled'

const lightNeon =
  '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa'
const darkNeon = '0px 0px 5px rgba(0,0,0,0.8)'

export const lightTheme: ITheme = {
  theme: {
    body: '#f2f2f2',
    text: '#262626',
    primary: '#BD93F9',
    highlight: '#E4289D',
    header: 'rgba(255, 255, 255, 0.2)',
    headerShadow: 'rgba(0, 0, 0, 0.1)',
    neon: darkNeon
  }
}

export const darkTheme = {
  theme: {
    body: '#000000',
    text: '#ffffff',
    primary: '#BD93F9',
    highlight: '#E4289D',
    header: 'rgba(150, 150, 150, 0.2)',
    headerShadow: 'rgba(255, 255, 255, 0.1)',
    neon: lightNeon
  }
}
