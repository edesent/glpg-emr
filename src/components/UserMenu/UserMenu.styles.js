import styled from 'styled-components'

export const StyledUserMenu = styled.div`
  position: relative;
  justify-self: end;
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
  background-color: #f4f7ff;
  border-radius: 10px;
  padding: 30px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.15s linear;

  &.is-open {
    top: 100%;
    visibility: visible;
    opacity: 1;
  }
`
