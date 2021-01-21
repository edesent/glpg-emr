import { SearchBar } from '../SearchBar'
import { UserMenu } from '../UserMenu'
import { StyledHeader, GridTop } from './Header.styles'

// eslint-disable-next-line react/prop-types
const Header = ({ title, children }) => (
  <StyledHeader>
    <GridTop>
      <SearchBar />
      <UserMenu />
    </GridTop>
    <h1>{title}</h1>
    {children}
  </StyledHeader>
)

export default Header
