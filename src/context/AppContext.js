import { useContext, createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useSettings from '../graphql/getSettings'

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
  const [settings, setSettings] = useState(null)
  const appSettings = useSettings()
  const [graphqlLoading, setGraphqlLoading] = useState(false)
  const [readUser, setReadUser] = useState(null)

  useEffect(() => {
    if (appSettings?.appSettings) {
      setSettings(appSettings.appSettings)
    }
  }, [appSettings.loading]) // eslint-disable-line

  const wrapper = {
    ...settings,
    setSettings,
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
