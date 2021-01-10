import styled from 'styled-components'

export const StyledInput = styled.div`
  position: relative;
  z-index: 1;
  border: 1px solid #d2d8e7;
  box-shadow: 0;
  border-radius: 5px;
  height: 50px;
  margin-bottom: 20px;
  background: #fff;
  transition: all 0.3s ease-in-out;

  &:focus-within {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }

  input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: none;
    width: 100%;
    padding: 0 20px;
    font-weight: 600;
    outline: none;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 30px #fff inset !important;
      -webkit-box-shadow: 0 0 0 30px #fff inset !important;
      border-radius: 5px;
    }

    &:focus,
    &:not(:placeholder-shown) {
      + label {
        font-size: 12px;
        top: 3px;
        z-index: 1;
      }

      padding-top: 10px;
    }
  }

  label {
    position: absolute;
    top: 12px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    padding: 0 20px;
    color: #999faa;
    transition: 0.2s top ease;
  }
`
