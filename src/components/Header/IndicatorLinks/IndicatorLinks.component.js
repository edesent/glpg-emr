import { ChatAltOutline, BellOutline } from 'heroicons-react'
import { Links } from './IndicatorLinks.styles'

const IndicatorLinks = () => (
  <Links>
    <a href="/" className="new">
      <ChatAltOutline size="24" />
    </a>
    <a href="/">
      <BellOutline size="24" />
    </a>
  </Links>
)

export default IndicatorLinks
