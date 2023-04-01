import { Header } from '../../components/Header'
import { ProfileInfo } from './components/ProfileInfo'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <main>
        <ProfileInfo />
      </main>
    </HomeContainer>
  )
}
