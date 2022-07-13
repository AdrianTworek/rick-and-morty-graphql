import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Character } from '../types/character'
import useFavoritesContext from '../context/favoritesContext'
import useCurrentCharacterContext from '../context/currentCharacterContext'
import useLocalStorage from '../hooks/useLocalStorage'
import { AiFillHeart } from 'react-icons/ai'

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material'

type CharacterProps = {
  character: Character
  showDetailsButton?: boolean
}

const CharacterCard = ({
  character,
  showDetailsButton = true,
}: CharacterProps) => {
  const { id, name, image } = character

  const { favorites, setFavorites } = useFavoritesContext()
  const { setCurrentCharacter, clearCurrentCharacter } =
    useCurrentCharacterContext()
  const [isFavorite, setIsFavorite] = useState<boolean>(
    () => favorites.findIndex((item: Character) => item.id === id) >= 0
  )
  const [_, setFavoritesLocalStorage] = useLocalStorage<Character[]>(
    'favorites',
    []
  )

  const navigate = useNavigate()

  const addToFavorites = () => {
    const updatedFavorites = [...favorites, character]

    setFavorites(updatedFavorites)
    setFavoritesLocalStorage(updatedFavorites)
    setIsFavorite(true)
    toast.success(`${name} was added to favorites`)
  }

  const removeFromFavorites = () => {
    const filteredFavorites = favorites.filter(
      (item: Character) => item.id !== id
    )

    setFavorites(filteredFavorites)
    setFavoritesLocalStorage(filteredFavorites)
    setIsFavorite(false)
    toast.error(`${name} was removed from favorites`)
  }

  const handleSeeDetails = () => {
    setCurrentCharacter(character)
    navigate(`/characters/${id}`)
  }

  const handleGoBack = () => {
    clearCurrentCharacter()
    navigate('/')
  }

  return (
    <Card sx={{ mb: 10, maxWidth: 300 }}>
      <CardMedia component="img" height="300" image={image} alt={name} />

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
      </CardContent>

      <Stack direction="row" gap={2} alignItems="center" sx={{ ml: 3, pb: 2 }}>
        <AiFillHeart
          cursor="pointer"
          color={isFavorite ? 'red' : undefined}
          onClick={isFavorite ? removeFromFavorites : addToFavorites}
        />

        <Button
          variant={showDetailsButton ? 'contained' : 'outlined'}
          color={showDetailsButton ? 'primary' : 'error'}
          size="small"
          sx={{ fontWeight: 'bold', fontSize: '12px' }}
          onClick={showDetailsButton ? handleSeeDetails : handleGoBack}
        >
          {showDetailsButton ? 'See Details' : 'Go Home'}
        </Button>
      </Stack>
    </Card>
  )
}

export default CharacterCard
