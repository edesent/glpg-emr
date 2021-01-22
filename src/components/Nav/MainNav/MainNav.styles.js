import styled from 'styled-components'
import Logout from '../../Logout'

export const StyledNav = styled.aside`
  height: 100vh;
  background-color: var(--color__blue--dark);
`

export const Logo = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    width: 60px;
  }
`

export const Links = styled.div`
  margin-top: 50px;
  display: grid;
  row-gap: 25px;

  a {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.1);

    &:not(.active):hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    &.active {
      background-color: var(--color__blue--extraLight);

      &:nth-of-type(1) {
        background-color: #fff9e0;
      }

      &:nth-of-type(2) {
        background-color: #d7e9ff;
      }

      &:nth-of-type(3) {
        background-color: #ffd7e0;
      }

      &:nth-of-type(4) {
        background-color: #d7ffec;
      }

      svg path {
        stroke: var(--color__blue--dark);
      }
    }

    svg {
      path {
        stroke: var(--color__gray);
      }
    }
  }
`

export const StyledLogout = styled(Logout)`
  position: fixed;
  bottom: 0;
  display: block;
  height: 90px;
  width: 90px;
  outline: 0;
  background: none;
  cursor: pointer;

  &:hover {
    svg path {
      stroke: #fff;
    }
  }

  svg path {
    stroke: var(--color__gray);
  }
`
