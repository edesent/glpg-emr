import styled from 'styled-components'
import Logout from '../Logout'

export const StyledUserMenu = styled.div`
  position: relative;
  float: right;
  margin-right: 40px;
`

export const Menu = styled.menu`
  display: grid;
  grid-template-columns: 40px 1fr 10px;
  align-items: center;
  column-gap: 20px;
  cursor: pointer;

  .role-name {
    font-weight: 600;

    span {
      display: block;
      color: #a0aec0;
      font-size: 0.75rem;
    }

    div {
    }
  }
`

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: #0f5ef7;
  border-radius: 20px;

  svg {
    width: 100%;
  }
`

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% - 20px);
  right: 0;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.15s linear;
  box-shadow: 0 0 25px -5px rgba(0, 0, 0, 0.15),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);

  &.is-open {
    top: 100%;
    visibility: visible;
    opacity: 1;
  }

  a {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 20px;

    svg {
      width: 18px;
      margin-right: 10px;

      path {
        stroke: #0f5ef7;
      }
    }
  }
`

export const StyledLogout = styled(Logout)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  background: none;
  padding: 0;
  outline: 0;

  svg {
    width: 18px;
    margin-right: 10px;

    path {
      stroke: #0f5ef7;
    }
  }
`
