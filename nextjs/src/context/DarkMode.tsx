import React, { createContext, useState, useContext } from 'react'

const DarkModeContext = createContext({})

const DarkModeProvider = ({ children }): JSX.Element => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

const useDarkModeContext = (): any => {
  const context = useContext(DarkModeContext)
  if (!context)
    throw new Error('useDarkMode must be used within a DarkModeProviders')
  return context
}

export { useDarkModeContext, DarkModeProvider }
