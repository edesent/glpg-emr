import styled from 'styled-components'

export const StyledHeader = styled.header`
  padding: 30px 80px 0;
  background-color: var(--color__gray--light);

  h1 {
    margin: 0;
  }
`

export const GridTop = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
`
