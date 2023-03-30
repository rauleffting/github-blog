import { Header } from '../../components/Header'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <h1 style={{ color: 'white' }}>Hello, world!</h1>
    </HomeContainer>
  )
}
