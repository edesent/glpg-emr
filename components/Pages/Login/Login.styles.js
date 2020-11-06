import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-content: center;
  justify-content: center;
  width: 100%;
  background: #f3f6fd;

  img {
    width: 80px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  position: relative;
  width: 400px;
  background: #fff;
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 50px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  div {
    position: relative;
    z-index: 1;
    border: 1px solid #d2d8e7;
    box-shadow: 0;
    border-radius: 5px;
    height: 50px;
    margin-bottom: 20px;
    background: #f3f6fd;
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

      &:focus,
      &:not(:placeholder-shown) {
        + label {
          font-size: 12px;
          top: 3px;
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
  }
`;

export const Error = styled.span`
  position: absolute;
  top: 15px;
  right: 0;
  left: 0;
  text-align: center;
  /* bottom: -70px; */
  display: block;
  color: #ef3737;
  font-size: 14px;
`;

export const Links = styled.span`
  display: flex;
  align-items: center;

  a {
    color: #0f5ef7;
    font-weight: 600;
    font-size: 15px;

    &:focus {
      text-decoration: underline;
      outline: 0;
    }
  }

  button {
    background: #0f5ef7;
    color: #fff;
    border-radius: 7px;
    padding: 10px 30px;
    font-weight: 600;
    font-size: 15px;
    margin-left: auto;
    box-shadow: 0;
    transition: all 0.3s ease-in-out;

    &:focus-within {
      outline: 0;
      box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    }
  }
`;
