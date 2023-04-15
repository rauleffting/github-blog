import { useContext } from 'react'
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

import { IssuesContext } from '../../../../contexts/IssuesContext'

export function ProfileInfo() {
  const { userData } = useContext(IssuesContext)

  return (
    <ProfileInfoContainer>
      {userData && (
        <>
          <ProfilePicture src={userData.avatar_url} />
          <Information>
            <div className="information-header-wrapper">
              <h1>{userData.name}</h1>
              <GithubLink href={userData.html_url} target="_blank">
                <span>GITHUB</span>
                <img src={arrow} alt="up right arrow" />
              </GithubLink>
            </div>
            <p>{userData.bio}</p>
            <div className="information-footer-wrapper">
              <OtherLinks>
                <img src={github} alt="github icon" />
                <span>{userData.login}</span>
              </OtherLinks>
              <OtherLinks>
                <img src={building} alt="building icon" />
                <span>{userData.company}</span>
              </OtherLinks>
              <OtherLinks>
                <img src={people} alt="two people icon" />
                <span>{userData.followers}</span>
              </OtherLinks>
            </div>
          </Information>
        </>
      )}
    </ProfileInfoContainer>
  )
}
