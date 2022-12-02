import TypeWritter from 'typewriter-effect'
import * as S from './styles'

export const Title = () => {
  return (
    <S.Wrapper>
      <S.TitleContainer>
        <TypeWritter
          options={{ loop: true }}
          onInit={typewriter => {
            typewriter
              .pauseFor(1000)
              .typeString('Olá mundo,<br/>')
              .pauseFor(300)
              .typeString(' eu sou o <span id="name">Arthur Nardini!</span >')
              .pauseFor(1000)
              .typeString(
                '<span id="subtitle"><br/>Desenvolvedor Front-End</span>'
              )
              .pauseFor(2500)
              .deleteAll()
              .typeString('Seja bem-vindo ao meu portfólio!')
              .pauseFor(5000)
              .deleteAll()
              .start()
          }}
        />
      </S.TitleContainer>
    </S.Wrapper>
  )
}
