import React from 'react'
import {
  HeaderLinks,
  Information,
  OtherLinks,
  PostInfoContainer,
} from './styles'
import arrowBack from '../../../../assets/arrow-back.svg'
import arrow from '../../../../assets/arrow-square-up-right.svg'
import github from '../../../../assets/github-icon.svg'
import calendar from '../../../../assets/calendar-icon.svg'
import comments from '../../../../assets/comments-icon.svg'
import { useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'

export function PostInfo({ issue }: any) {
  const navigation = useNavigate()

  function handleNavigate(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    navigation(-1)
  }

  const date = new Date(issue.updated_at)
  const formattedDate = formatDistanceToNow(date, { addSuffix: true })

  return (
    <PostInfoContainer>
      <Information>
        <div className="information-header-wrapper">
          <HeaderLinks onClick={handleNavigate}>
            <img src={arrowBack} alt="back arrow" />
            <span>GO BACK</span>
          </HeaderLinks>
          <HeaderLinks href={issue.html_url} target="_blank">
            <span>SEE ON GITHUB</span>
            <img src={arrow} alt="up right arrow" />
          </HeaderLinks>
        </div>
        <h1>{issue.title}</h1>
        <div className="information-footer-wrapper">
          <OtherLinks>
            <img src={github} alt="github icon" />
            <span>{issue.user.login}</span>
          </OtherLinks>
          <OtherLinks>
            <img src={calendar} alt="building icon" />
            <span>{formattedDate}</span>
          </OtherLinks>
          <OtherLinks>
            <img src={comments} alt="two people icon" />
            <span>{issue.comments}</span>
          </OtherLinks>
        </div>
      </Information>
    </PostInfoContainer>
  )
}
