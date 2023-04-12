import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Card } from './components/Card'
import { ProfileInfo } from './components/ProfileInfo'
import { HomeContainer, Search, Section } from './styles'
import { api } from '../../lib/axios'

export function Home() {
  const [issues, setIssues] = useState([])

  async function fetchIssues() {
    const response: any = await api.get(
      `/repos/rocketseat-education/reactjs-github-blog-challenge/issues`,
    )

    setIssues(response.data)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

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
              <Card
                key={issue.id}
                issue={issue}
              />
            ))}
          </div>
        </Section>
      </main>
    </HomeContainer>
  )
}
