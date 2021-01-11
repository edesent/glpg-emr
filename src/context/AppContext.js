import { useContext, createContext, useState } from 'react'
import PropTypes from 'prop-types'
// import { useRealmApp } from './RealmContext'

// We need a contexts for App Settings
const AppSettingsContext = createContext()

// We create a hook to be able to use app settings in other files
export const useSettingsApp = () => {
  const appSettings = useContext(AppSettingsContext)
  if (!appSettings) {
    throw new Error(
      `You must use AppSettings inside of a <AppSettingsContext.Provider  />`
    )
  }
  return appSettings
}
// This can be expanded but I threw in some details
export const UseAppSettings = ({ children }) => {
  const [appSettings, setAppSettings] = useState({ timeout: 120 })

  const [graphqlLoading, setGraphqlLoading] = useState(false)

  const wrapper = {
    ...appSettings,
    setAppSettings,
    graphqlLoading,
    setGraphqlLoading,
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
