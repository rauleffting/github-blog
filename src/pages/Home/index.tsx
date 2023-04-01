import { Header } from '../../components/Header'
import { Card } from './components/Card'
import { ProfileInfo } from './components/ProfileInfo'
import { HomeContainer, Search, Section } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <main>
        <ProfileInfo />
        <Section>
          <div className="section-header">
            <h4>Posts</h4>
            <span>6 posts</span>
          </div>
          <Search type="text" placeholder="Search content" />
          <div className="card-wrapper">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Section>
      </main>
    </HomeContainer>
  )
}
