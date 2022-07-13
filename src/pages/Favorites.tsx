import useFavoritesContext from '../context/favoritesContext'

import { Box, Typography } from '@mui/material'

import { CharactersList } from '../components'

const Favorites = () => {
  const { favorites } = useFavoritesContext()

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        mt: 10,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Favorites
      </Typography>

      {!favorites.length && (
        <Typography variant="h6">
          You have not added any character to favorites
        </Typography>
      )}

      <CharactersList characters={favorites} />
    </Box>
  )
}

export default Favorites
