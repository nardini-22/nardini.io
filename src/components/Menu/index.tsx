import Link from 'next/link'
import * as S from './styles'

export const Menu = () => {
  const array = [
    {
      label: 'Sobre',
      url: '/#'
    },
    {
      label: 'Habilidades',
      url: '/#'
    },
    {
      label: 'Projetos',
      url: '/#'
    },
    {
      label: 'Contatos',
      url: '/#'
    }
  ]
  return (
    <S.Container>
      {array.map(item => (
        <Link href={item.url}>
          <S.IconContainer>
            <p>{item.label}</p>
          </S.IconContainer>
        </Link>
      ))}
    </S.Container>
  )
}
