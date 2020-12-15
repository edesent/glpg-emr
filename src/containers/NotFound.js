import React from 'react'
import styled from 'styled-components'

const FourOhFour = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 15vw;
    margin: 0 0 30px;
  }

  strong {
    font-size: 3rem;
  }
`

const NotFound = () => (
  <FourOhFour>
    <h1>Ope!</h1>
    <strong>404 - Page Not Found</strong>
    <p>
      The page you are looking for might have been removed, had it&apos;s name
      changed, or is temporarily unavailable.
    </p>
    <button>Back Home</button>
  </FourOhFour>
)

export default NotFound
