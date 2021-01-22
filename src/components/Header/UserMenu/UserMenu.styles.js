import styled from 'styled-components'
import Logout from '../../Logout'

export const StyledUserMenu = styled.div`
  position: relative;
  justify-self: end;
`

export const Menu = styled.menu`
  margin: 0;
  cursor: pointer;
  position: relative;
  display: inline-block;

  .chevron {
    position: absolute;
    bottom: -3px;
    right: -3px;
    background: var(--color__gray--light);
    height: 16px;
    width: 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  padding: 8px;
  background-color: #0f5ef7;
  border-radius: 25px;

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
  width: 220px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.15s linear;
  box-shadow: 0 0 25px -5px rgba(0, 0, 0, 0.15),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);

  &.is-open {
    top: calc(100% + 10px);
    visibility: visible;
    opacity: 1;
  }

  .role-name {
    font-weight: 600;
    margin-bottom: 20px;

    span {
      display: block;
      color: #a0aec0;
      font-size: 0.75rem;
    }
  }

  a {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;

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
  cursor: pointer;
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
