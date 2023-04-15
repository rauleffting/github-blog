import { CardContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'

export function Card({ issue }: any) {
  const navigation = useNavigate()
  function handleNavigate(id: string) {
    navigation(`/post/${id}`)
  }

  const date = new Date(issue.updated_at)
  const formattedDate = formatDistanceToNow(date, { addSuffix: true })

  return (
    <CardContainer onClick={() => handleNavigate(issue.id)}>
      <div className="header-wrapper">
        <h2>{issue.title}</h2>
        <span>{formattedDate}</span>
      </div>
      <p>{issue.body}</p>
    </CardContainer>
  )
}
