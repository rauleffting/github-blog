import { CardContainer } from './styles'
import { useNavigate } from 'react-router-dom'

export function Card({ issue }: any) {
  const navigation = useNavigate()
  function handleNavigate(id: string) {
    console.log('clicked')
    navigation(`/post/${id}`)
  }

  return (
    <CardContainer onClick={() => handleNavigate(issue.id)}>
      <div className="header-wrapper">
        <h2>{issue.title}</h2>
        <span>1 day ago</span>
      </div>
      <p>{issue.body}</p>
    </CardContainer>
  )
}
