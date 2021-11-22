import {
  ReactNode,
  MutableRefObject,
  createContext,
  useContext,
  useMemo,
  useRef,
} from 'react'






export type CommerceConfig = {
  locale: string
  cartCookie: string
}


/**
 * These are the properties every provider should allow when implementing
 * the core commerce provider
 */
export type CommerceProviderProps = {
  children?: ReactNode
} & Partial<CommerceConfig>


