import { useContext } from 'react'
import { Header } from '../../components/Header'
import { IssuesContext } from '../../contexts/IssuesContext'
import { Card } from './components/Card'
import { ProfileInfo } from './components/ProfileInfo'
import { HomeContainer, Search, Section } from './styles'

export function Home() {
  const { issues } = useContext(IssuesContext)
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
            {issues.map((issue) => (
              <Card key={issue.id} issue={issue} />
            ))}
          </div>
        </Section>
      </main>
    </HomeContainer>
  )
}
