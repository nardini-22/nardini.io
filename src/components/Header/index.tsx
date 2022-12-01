import { useScreenSize } from '@/hooks/useScreenSize'
import Link from 'next/link'
import { Menu } from '../Menu'
import { ToggleTheme } from '../ToggleTheme'
import * as S from './styles'

export const Header = () => {
  const screenType = useScreenSize()
  return (
    <S.Container>
      <Link href="/">
        <S.Title>Nardini.io</S.Title>
      </Link>
      {screenType === 'desktop' && <Menu />}
      <ToggleTheme />
    </S.Container>
  )
}
