import styled from 'styled-components'

export const StyledLogin = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-content: center;
  justify-content: center;
  background-color: #f3f6fd;

  @media (max-width: 999px) {
    width: 100%;
    position: relative;
    background-color: rgba(243, 246, 253, 0.85);
    padding: 0 20px;
  }

  img {
    width: 80px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
`

export const FormWrapper = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  width: 60%;

  @media (max-width: 999px) {
    width: 400px;
  }

  h1 {
    color: var(--color_heading);
    font-weight: 600;
    font-size: 28px;
    margin: 0 0 20px;
    letter-spacing: -0.5px;
  }
`

export const Error = styled.span`
  display: block;
  color: #ef3737;
  font-size: 14px;
  margin: 0 0 10px;
`

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
`

export const BackgroundImg = styled.div`
  float: left;
  width: 40%;
  background: #3d91f9;

  @media (max-width: 999px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    float: left;
    opacity: 0.5;

    @media (max-width: 999px) {
      position: fixed;
    }
  }

  svg {
    position: absolute;
    top: 28px;
    left: 15px;
    width: 60px;

    @media (max-width: 999px) {
      z-index: 1;

      path {
        fill: #000;
      }
    }
  }
`
