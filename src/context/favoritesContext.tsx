import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { Character } from '../types/character'

type FavoritesContextType = {
  favorites: Character[]
  setFavorites: Dispatch<SetStateAction<Character[]>>
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  setFavorites: () => {},
})

export const FavoritesContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [favorites, setFavorites] = useState<Character[]>(
    JSON.parse(localStorage.getItem('favorites')!) || []
  )

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}

const useFavoritesContext = () => useContext(FavoritesContext)

export default useFavoritesContext
