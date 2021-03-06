import React from 'react'
import { Login } from '../components/Login'
import { ResetPassword } from '../components/ResetPassword'
import { SetPassword } from '../components/SetPassword'
import {
  BackgroundImg,
  StyledLogin,
  FormWrapper,
} from '../components/Login/Login.styles'
import background from '../assets/images/login-background.jpg'

// eslint-disable-next-line react/prop-types
const LoginPage = ({ location }) => {
  // eslint-disable-next-line react/prop-types
  const params = new URLSearchParams(location.search)
  return (
    <>
      <BackgroundImg>
        <img alt="Background" src={background} />
        <svg fill="none" viewBox="0 0 64 36" xmlns="http://www.w3.org/2000/svg">
          <defs />
          <path
            d="M12.9359 9.24002h4.2V16.2c-.96.688-2.064 1.216-3.312 1.584-1.248.368-2.496.552-3.744.552-1.75998 0-3.34398-.368-4.75198-1.104-1.408-.752-2.512-1.792-3.312-3.12-.8-1.328-1.2-2.832-1.2-4.51199 0-1.68.4-3.184 1.2-4.512.8-1.328 1.912-2.36 3.336-3.096 1.424-.752 3.032-1.128 4.82398-1.128 1.568 0 2.976.264 4.224.792 1.248.528 2.288 1.288 3.12 2.28l-3.024 2.736c-1.136-1.248-2.496-1.872-4.08-1.872-1.43998 0-2.59998.44-3.47998 1.32-.88.864-1.32 2.024-1.32 3.48 0 .92799.2 1.75999.6 2.49599.4.72.96 1.288 1.68 1.704.72.4 1.544.6 2.47198.6.912 0 1.768-.184 2.568-.552V9.24002zM18.4687 1.20001h4.752V14.232h8.016V18h-12.768V1.20001zM39.1171 1.20001c1.52 0 2.84.256 3.96.768 1.12.496 1.984 1.216 2.592 2.16.608.928.912 2.024.912 3.288 0 1.264-.304 2.36-.912 3.28799-.608.928-1.472 1.648-2.592 2.16-1.12.496-2.44.744-3.96.744h-2.928V18h-4.752V1.20001h7.68zm-.288 8.664c.976 0 1.712-.208 2.208-.62399.496-.43201.744-1.04001.744-1.82401 0-.784-.248-1.392-.744-1.824-.496-.432-1.232-.648-2.208-.648h-2.64v4.92h2.64zM58.7084 9.24002h4.2V16.2c-.96.688-2.064 1.216-3.312 1.584-1.248.368-2.496.552-3.744.552-1.76 0-3.344-.368-4.752-1.104-1.408-.752-2.512-1.792-3.312-3.12-.8-1.328-1.2-2.832-1.2-4.51199 0-1.68.4-3.184 1.2-4.512.8-1.328 1.912-2.36 3.336-3.096 1.424-.752 3.032-1.128 4.824-1.128 1.568 0 2.976.264 4.224.792 1.248.528 2.288 1.288 3.12 2.28l-3.024 2.736c-1.136-1.248-2.496-1.872-4.08-1.872-1.44 0-2.6.44-3.48 1.32-.88.864-1.32 2.024-1.32 3.48 0 .92799.2 1.75999.6 2.49599.4.72.96 1.288 1.68 1.704.72.4 1.544.6 2.472.6.912 0 1.768-.184 2.568-.552V9.24002z"
            fill="#fff"
          />
          <path d="M2 22h61v14L2 22z" fill="#fff" />
        </svg>
      </BackgroundImg>
      <StyledLogin>
        <FormWrapper>
          {(() => {
            if (params.get('forgotpassword') !== null) {
              return <ResetPassword location={location} />
            }
            if (
              params.get('setpassword') !== null &&
              params.get('token') &&
              params.get('tokenId')
            ) {
              return <SetPassword location={location} />
            }
            return <Login />
          })()}
        </FormWrapper>
      </StyledLogin>
    </>
  )
}

export default LoginPage
