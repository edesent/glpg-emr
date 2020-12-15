import styled from 'styled-components'

export const StyledSubmenu = styled.aside`
  position: fixed;
  top: 0;
  left: 90px;
  bottom: 0;
  background: #f4f7ff;
  border-right: 1px solid #e1e6f1;
  width: 300px;

  h1 {
    height: 90px;
    line-height: 90px;
    border-bottom: 1px solid #e1e6f1;
    padding: 0 30px;
    font-weight: 600;
    font-size: 24px;
  }
`

export const SubLinks = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`
