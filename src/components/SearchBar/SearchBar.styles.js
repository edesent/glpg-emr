import styled from 'styled-components'

export const StyledSearch = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  height: 40px;

  svg {
    position: absolute;
    top: 11px;
    left: 15px;
    width: 18px;

    path {
      stroke: #829ab1;
    }
  }

  input {
    width: 100%;
    border-radius: 5px;
    padding: 0 20px 0 45px;
    outline: 0;
    height: 40px;

    &::placeholder {
      font-size: 14px;
      position: relative;
      top: -1px;
      color: #829ab1;
    }
  }
`
