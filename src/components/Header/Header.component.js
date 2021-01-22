import { SearchBar } from '../SearchBar'
import { IndicatorLinks } from './IndicatorLinks'
import { UserMenu } from './UserMenu'
import { StyledHeader, GridTop, GridRight } from './Header.styles'

// eslint-disable-next-line react/prop-types
const Header = ({ title, children }) => (
  <StyledHeader>
    <GridTop>
      <SearchBar />
      <GridRight>
        <IndicatorLinks />
        <UserMenu />
      </GridRight>
    </GridTop>
    <h1>{title}</h1>
    {children}
  </StyledHeader>
)

export default Header
