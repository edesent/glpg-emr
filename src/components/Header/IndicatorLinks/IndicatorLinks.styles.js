import styled from 'styled-components'

export const Links = styled.div`
  justify-self: end;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  margin-right: 35px;

  a {
    position: relative;
    display: flex;
    /* temp disable links */
    pointer-events: none;

    &.new::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 8px;
      width: 8px;
      border-radius: 4px;
      background-color: #ff0000;
    }
  }

  svg {
    path {
      stroke: var(--color__gray);
    }
  }
`
