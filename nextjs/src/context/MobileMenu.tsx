import React, { createContext, useState, useContext } from 'react'

const MobileMenuContext = createContext({})

const MobileMenuProvider = ({ children }): JSX.Element => {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      <MobileMenuContext.Provider value={{ mobileMenu, setMobileMenu }}>
        {children}
      </MobileMenuContext.Provider>
    </>
  )
}

const useMobileMenuContext = (): any => {
  const context = useContext(MobileMenuContext)
  if (!context)
    throw new Error('useMobileMenu must be used within a MobileMenuProviders')
  return context
}

export { useMobileMenuContext, MobileMenuProvider }
