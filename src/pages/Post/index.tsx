import { useContext } from 'react'
import { IssuesContext } from '../../contexts/IssuesContext'
import { Header } from '../../components/Header'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'
import { useParams } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'

export function Post() {
  const { issues } = useContext(IssuesContext)
  const { id } = useParams()

  const issue = issues.find((issue) => issue.id === Number(id))

  return (
    issue && (
      <PostContainer>
        <Header />
        <main>
          <PostInfo />
          <div className="content">
            {/* <button onClick={() => console.log(issue)}>test</button> */}
            <ReactMarkdown children={issue.body} />
          </div>
        </main>
      </PostContainer>
    )
  )
}
