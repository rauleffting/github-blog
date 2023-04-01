import {
  GithubLink,
  Information,
  OtherLinks,
  ProfileInfoContainer,
  ProfilePicture,
} from './styles'
import arrow from '../../../../assets/arrow-square-up-right.svg'
import github from '../../../../assets/github-icon.svg'
import building from '../../../../assets/building-icon.svg'
import people from '../../../../assets/people-icon.svg'

import avatar from '../../../../assets/avatar.png'

export function ProfileInfo() {
  return (
    <ProfileInfoContainer>
      <ProfilePicture src={avatar} />
      <Information>
        <div className="information-header-wrapper">
          <h1>Cameron Williamson</h1>
          <GithubLink>
            <span>GITHUB</span>
            <img src={arrow} alt="up right arrow" />
          </GithubLink>
        </div>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div className="information-footer-wrapper">
          <OtherLinks>
            <img src={github} alt="github icon" />
            <span>camaronwll</span>
          </OtherLinks>
          <OtherLinks>
            <img src={building} alt="building icon" />
            <span>Rocketseat</span>
          </OtherLinks>
          <OtherLinks>
            <img src={people} alt="two people icon" />
            <span>32 followers</span>
          </OtherLinks>
        </div>
      </Information>
    </ProfileInfoContainer>
  )
}
