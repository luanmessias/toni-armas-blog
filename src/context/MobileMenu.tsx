import React, { createContext, useState, useContext } from 'react'

type ChildrenPropTtypes = {
  children: React.ReactNode
}

type ContextType = {
  mobileMenu: boolean
  setMobileMenu: (darkMode: boolean) => void
}

const MobileMenuContext = createContext<ContextType | null>(null)

const MobileMenuProvider = ({
  children
}: ChildrenPropTtypes): React.ReactElement => {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      <MobileMenuContext.Provider value={{ mobileMenu, setMobileMenu }}>
        {children}
      </MobileMenuContext.Provider>
    </>
  )
}

const useMobileMenuContext = (): ContextType => {
  const context = useContext(MobileMenuContext)
  if (!context) {
    throw new Error('useMobileMenu must be used within a MobileMenuProviders')
  }
  return context
}

export { useMobileMenuContext, MobileMenuProvider }
