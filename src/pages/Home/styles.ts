import styled from 'styled-components'

export const HomeContainer = styled.div`
  main {
    margin: 0 18rem;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  .section-header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 0.75rem;

    h4 {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 160%;
      color: ${(props) => props.theme.subtitle};
    }

    span {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      color: ${(props) => props.theme.span};
    }
  }

  .card-wrapper {
    display: grid;
    grid-template-columns: repeat(2, minmax(26rem, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }
`

export const Search = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme.input};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 6px;
  margin-bottom: 3rem;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.blue};
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue}33;
  }
`
