import { createContext, useEffect } from "react";

export const WebSocketsContext = createContext()

export const WebSocketsProvider = ({ children }) => {
  
  useEffect(() => {
    
  }, [])
  
  return (
    <WebSocketsContext.Provider>
      {children}
    </WebSocketsContext.Provider>
  )
}