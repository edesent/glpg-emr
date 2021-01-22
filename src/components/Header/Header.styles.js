import styled from 'styled-components'

export const StyledHeader = styled.header`
  padding: 30px 80px 0;
  background-color: var(--color__gray--light);

  h1 {
    margin: 20px 0 0;
    padding-bottom: 20px;
  }
`

export const GridTop = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
`

export const GridRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 50px;
  align-items: center;
`
