import styled from 'styled-components'
import Logout from '../../Logout'

export const StyledHeader = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 90px;
  border-right: 1px solid #e1e6f1;
`

export const Logo = styled.div`
  border-bottom: 1px solid #f2f3f6;
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

  svg {
    max-width: 32px;
    max-height: 32px;
    margin: 0 auto;
  }

  a {
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.active {
      background: #f4f7ff;
    }
  }
`

export const StyledLogout = styled(Logout)`
  position: fixed;
  bottom: 0;
  border-top: 1px solid #f2f3f6;
  display: block;
  height: 90px;
  width: 90px;
  outline: 0;
  background: none;

  svg {
    max-width: 24px;
  }
`
