import Theme from '@/context/Theme'
import { useContext } from 'react'
import * as S from './styles'

export const ToggleTheme = () => {
  const { theme, setTheme } = useContext(Theme)
  return (
    <S.Wrapper onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <S.Dot option={theme} />
    </S.Wrapper>
  )
}
