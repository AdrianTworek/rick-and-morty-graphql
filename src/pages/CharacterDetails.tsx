import { motion } from 'framer-motion'
import useCurrentCharacterContext from '../context/currentCharacterContext'

import { Box, Typography } from '@mui/material'

import { CharacterCard, Spinner } from '../components'

const CharacterDetails = () => {
  const { currentCharacter } = useCurrentCharacterContext()

  if (!currentCharacter) return <Spinner />

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
        {currentCharacter.name}
      </Typography>

      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        component={motion.div}
      >
        <CharacterCard character={currentCharacter} showDetailsButton={false} />
      </Box>
    </Box>
  )
}

export default CharacterDetails
