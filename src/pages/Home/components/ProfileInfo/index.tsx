import { useEffect, useState } from 'react'
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

// import avatar from '../../../../assets/avatar.png'
import { api } from '../../../../lib/axios'

interface UserData {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
}

export function ProfileInfo() {
  const [userData, setUserData] = useState({})

  async function fetchUserData() {
    const response = await api.get<UserData>(`/users/rauleffting`)

    setUserData(response.data)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <ProfileInfoContainer>
      {/* <button onClick={() => console.log(userData)}>test</button> */}
      <ProfilePicture src={userData.avatar_url} />
      <Information>
        <div className="information-header-wrapper">
          <h1>{userData.name}</h1>
          <GithubLink>
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
    </ProfileInfoContainer>
  )
}
