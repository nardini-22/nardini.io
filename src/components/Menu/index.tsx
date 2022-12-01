import Link from 'next/link'
import * as S from './styles'

export const Menu = () => {
  const array = [
    {
      icon: <>teste</>,
      label: 'Teste',
      url: '/'
    }
  ]
  return (
    <S.Container>
      {array.map(item => (
        <Link href={item.url}>
          <>
            {item.icon}
            {item.label}
          </>
        </Link>
      ))}
    </S.Container>
  )
}
