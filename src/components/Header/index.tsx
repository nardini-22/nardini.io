import Theme from '@/context/Theme'
import { useScreenSize } from '@/hooks/useScreenSize'
import { useContext } from 'react'
import { Menu } from '../Menu'
import * as S from './styles'

export const Header = () => {
  const { theme, setTheme } = useContext(Theme)
  const screenType = useScreenSize()
  return (
    <S.Container>
      <S.Title>Nardini.io</S.Title>
      {/* <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme}
      </button> */}
      {screenType === 'desktop' && <Menu />}
    </S.Container>
  )
}
