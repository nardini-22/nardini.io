import { Background } from '../Background'
import { Header } from '../Header'
import { Image } from '../Image'
import { Title } from '../Title'
import * as S from './styles'

export const HomePage = () => {
  return (
    <>
      <Background />
      <Header />
      <S.Container>
        <Image />
        <Title />
      </S.Container>
    </>
  )
}
