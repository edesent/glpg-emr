import styled from 'styled-components'

export const StyledNav = styled.nav`
  margin-top: 30px;

  a {
    color: #829ab1;
    display: inline-block;
    padding: 10px 0 15px;

    &:not(:last-of-type) {
      margin-right: 35px;
    }

    &.active {
      color: #000;
      font-weight: 600;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #000;
        height: 4px;
        width: 100%;
      }
    }
  }
`

// export const StyledSubNav = styled.aside`
//   height: 100vh;
//   background: #f4f7ff;
//   border-right: 1px solid #e1e6f1;

//   h1 {
//     height: 90px;
//     line-height: 90px;
//     border-bottom: 1px solid #e1e6f1;
//     margin: 0;
//     padding: 0 30px;
//     font-weight: 600;
//     font-size: 24px;
//   }
// `

// export const SubLinks = styled.div`
//   padding: 30px;
//   display: flex;
//   flex-direction: column;
// `
