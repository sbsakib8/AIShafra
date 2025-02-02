import { createContext } from 'react'
export const datacontext = createContext()
function UseContext({children}) {
    const value = {
        value: 'sb sakib',
    }
  return (
    <div>
        <datacontext.Provider value={value}>
            {children}
        </datacontext.Provider>
    </div>
  )
}

export default UseContext