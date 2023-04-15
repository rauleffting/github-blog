import styled from 'styled-components'

export const ProfileInfoContainer = styled.section`
  background-color: ${(props) => props.theme.profile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  min-height: 13.25rem;
  margin-top: -5rem;
  margin-bottom: 4.5rem;
  padding: 2rem;

  display: flex;

  gap: 2rem;
`
export const ProfilePicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;

  border-radius: 10rem;
`

export const Information = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;
  flex-direction: column;

  .information-header-wrapper {
    display: flex;
    justify-content: space-between;

    h1 {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 130%;
      color: ${(props) => props.theme.title};
    }
  }

  p {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme.text};
  }

  .information-footer-wrapper {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  height: 1.1875rem;

  span {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 170%;

    color: ${(props) => props.theme.blue};
  }

  :hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
    cursor: pointer;
  }
`

export const OtherLinks = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    color: ${(props) => props.theme.subtitle};
  }
`
