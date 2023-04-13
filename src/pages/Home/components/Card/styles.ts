import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background-color: ${(props) => props.theme.post};
  border-radius: 10px;

  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 160%;
      color: ${(props) => props.theme.title};
    }

    span {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 160%;

      color: ${(props) => props.theme.span};
    }
  }

  p {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;

    color: ${(props) => props.theme.text};

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &:hover {
    cursor: pointer;
    border: 2px solid #3a536b;
  }
`
