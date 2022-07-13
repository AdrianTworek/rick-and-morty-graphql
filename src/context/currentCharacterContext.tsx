import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { Character } from '../types/character'

type CurrentCharacterContextType = {
  currentCharacter: Character
  setCurrentCharacter: Dispatch<SetStateAction<Character>>
  clearCurrentCharacter: () => void
}

const CurrentCharacterContext = createContext<CurrentCharacterContextType>({
  currentCharacter: { id: 0, name: '', image: '' },
  setCurrentCharacter: () => {},
  clearCurrentCharacter: () => {},
})

const initialState = { id: 0, name: '', image: '' }

export const CurrentCharacterContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [currentCharacter, setCurrentCharacter] =
    useState<Character>(initialState)

  const clearCurrentCharacter = () => setCurrentCharacter(initialState)

  return (
    <CurrentCharacterContext.Provider
      value={{ currentCharacter, setCurrentCharacter, clearCurrentCharacter }}
    >
      {children}
    </CurrentCharacterContext.Provider>
  )
}

const useCurrentCharacterContext = () => useContext(CurrentCharacterContext)

export default useCurrentCharacterContext
