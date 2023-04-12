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

export function PostInfo() {
  return (
    <PostInfoContainer>
      <Information>
        <div className="information-header-wrapper">
          <HeaderLinks>
            <img src={arrowBack} alt="back arrow" />
            <span>GO BACK</span>
          </HeaderLinks>
          <HeaderLinks>
            <span>SEE ON GITHUB</span>
            <img src={arrow} alt="up right arrow" />
          </HeaderLinks>
        </div>
        <h1>JavaScript data types and data structures</h1>
        <div className="information-footer-wrapper">
          <OtherLinks>
            <img src={github} alt="github icon" />
            <span>camaronwll</span>
          </OtherLinks>
          <OtherLinks>
            <img src={calendar} alt="building icon" />
            <span>1 day ago</span>
          </OtherLinks>
          <OtherLinks>
            <img src={comments} alt="two people icon" />
            <span>5 comments</span>
          </OtherLinks>
        </div>
      </Information>
    </PostInfoContainer>
  )
}
