import { useContext } from 'react'
import { IssuesContext } from '../../contexts/IssuesContext'
import { Header } from '../../components/Header'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function Post() {
  const { issues } = useContext(IssuesContext)
  const { id } = useParams()

  const issue = issues?.find((issue) => issue.id === Number(id))

  return (
    issue && (
      <PostContainer>
        <Header />
        <main>
          <PostInfo issue={issue} />
          <div className="content">
            <ReactMarkdown
              children={issue.body}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      style={atomDark as any}
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            />
          </div>
        </main>
      </PostContainer>
    )
  )
}
