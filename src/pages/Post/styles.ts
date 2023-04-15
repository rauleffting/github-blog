import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  main {
    margin: 0 18rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.5rem 2rem;
    margin-bottom: 8rem;

    img {
      width: 100%;
    }

    h1,
    h2,
    h3 {
      color: ${(props) => props.theme.blue};
    }

    ul {
      list-style: inherit;
      padding-left: 1.5rem;
    }

    p,
    span,
    pre,
    ul {
      color: ${(props) => props.theme.text};
    }
  }
`
