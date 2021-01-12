import { useContext, createContext, useState } from 'react'
import PropTypes from 'prop-types'

// We need a contexts for App Settings
const AppSettingsContext = createContext()

// We create a hook to be able to use app settings in other files
export const useSettingsApp = () => {
  const appSettings = useContext(AppSettingsContext)
  if (!appSettings) {
    return null
  }
  return appSettings
}
// This can be expanded but I threw in some details
export const UseAppSettings = ({ children }) => {
  const [appSettings, setAppSettings] = useState({ timeout: 120 })
  const [graphqlLoading, setGraphqlLoading] = useState(false)
  const [readUser, setReadUser] = useState()

  const wrapper = {
    ...appSettings,
    setAppSettings,
    graphqlLoading,
    setGraphqlLoading,
    readUser,
    setReadUser,
  }
  return (
    <AppSettingsContext.Provider value={wrapper}>
      {children}
    </AppSettingsContext.Provider>
  )
}
UseAppSettings.propTypes = {
  children: PropTypes.node,
}
