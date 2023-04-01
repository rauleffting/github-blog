import {
  GithubLink,
  Information,
  ProfileInfoContainer,
  ProfilePicture,
} from './styles'
import arrow from '../../../assets/arrow-square-up-right.svg'

export function ProfileInfo() {
  return (
    <ProfileInfoContainer>
      <ProfilePicture />
      <Information>
        <div className="information-header-wrapper">
          <h1>Cameron Williamson</h1>
          <GithubLink>
            <span>GITHUB</span>
            <img src={arrow} alt="up right arrow" />
          </GithubLink>
        </div>
      </Information>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique esse at
      nostrum debitis ratione maxime. Magnam similique id veritatis! Labore quia
      eum aliquid aperiam, iste voluptatem? Id dolor repudiandae facilis!
    </ProfileInfoContainer>
  )
}
