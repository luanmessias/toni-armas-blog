import React, { createContext, useState, useContext } from 'react'

type ChildrenPropTtypes = {
  children: React.ReactNode
}

type ContextType = {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

const DarkModeContext = createContext<ContextType | null>(null)

const DarkModeProvider = ({
  children
}: ChildrenPropTtypes): React.ReactElement => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

const useDarkModeContext = (): ContextType => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProviders')
  }
  return context
}

export { useDarkModeContext, DarkModeProvider }
