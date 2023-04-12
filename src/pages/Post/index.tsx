import { Header } from '../../components/Header'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'

export function Post() {
  return (
    <PostContainer>
      <Header />
      <main>
        <PostInfo />
        <div>
          <h1>Hello, world!</h1>
        </div>
      </main>
    </PostContainer>
  )
}
